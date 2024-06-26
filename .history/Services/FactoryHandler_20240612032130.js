const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const path = require("path");
const express = require("express");
const ApiError = require("../Resuble/ApiErrors");
const FeatureApi = require("../Utils/Feature");

const { uploadImageToCloudinary } = require("../Middleware/UploadToCloudinary");

exports.createOne = (Model) =>
  expressAsyncHandler(async (req, res) => {
    const newPath = path.join(__dirname);
    const result = await uploadImageToCloudinary("uploads/categories/", "123", "catagory-images")
    console.log(result);

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }
    if (req.body.passwordDB) {
      req.body.passwordDB = await bcrypt.hash(req.body.passwordDB, 12);
    }
    const createDoc = await Model.create(req.body);
    res.status(201).json({ data: createDoc });
  });
exports.getAll = (Model, keyword) =>
  expressAsyncHandler(async (req, res) => {
 
    let fillter = {};
    if (req.filterObject) {
      fillter = req.filterObject;
    }
   
    const countDocs = await Model.countDocuments();
    const ApiFeatures = new FeatureApi(Model.find(fillter), req.query)
      .Fillter()
      .Sort()
      .Fields()
      .Search(keyword)
      .Paginate(countDocs);
    const { MongooseQueryApi, PaginateResult } = ApiFeatures;
    const getDoc = await MongooseQueryApi;
    
    res
      .status(201)
      .json({ results: getDoc.length, PaginateResult, data: getDoc });
  });
exports.getOne = (Model, populateOpt) =>
  expressAsyncHandler(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOpt) {
      query = query.populate(populateOpt);
    }
    const getDocById = await query;
    if (!getDocById)
      next(
        new ApiError(`Sorry Can't get This ID From ID :${req.params.id}`, 404)
      );
    res.status(200).json({ data: getDocById });
  });
exports.deleteOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const deleteDoc = await Model.findById(req.params.id);
    console.log(deleteDoc.image);
  //   try {
  //     // البحث عن الصورة في قاعدة البيانات
  //     const image = await Image.findById(imageId);
  //     if (!image) {
  //         console.log('الصورة غير موجودة في قاعدة البيانات');
  //         return;
  //     }

  //     // حذف الصورة من قاعدة البيانات
  //     await Image.findByIdAndDelete(imageId);

  //     // حذف الصورة من ملفات المشروع
  //     const filePath = path.join(__dirname, image.path);
  //     fs.unlink(filePath, (err) => {
  //         if (err) {
  //             console.error('خطأ في حذف الصورة من الملفات:', err);
  //         } else {
  //             console.log('تم حذف الصورة بنجاح من الملفات');
  //         }
  //     });

  // } catch (error) {
  //     console.error('حدث خطأ أثناء الحذف:', error);
  // }
    if (!deleteDoc) {
      next(
        new ApiError(
          `Sorry Can't Delete This ID From ID :${req.params.id}`,
          404
        )
      );
    }
    // deleteDoc.remove();
    res.status(200).json({ message: "Delete Success" });
  });
exports.updateOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const updateDocById = await Model.findByIdAndUpdate(
      req.params.id,
      req.body.image === "" ? { $set: { name: req.body.name } } : req.body,

      { new: true }
    );

    if (!updateDocById)
      next(
        new ApiError(
          `Sorry Can't Update This ID From ID :${req.params.id}`,
          404
        )
      );
    updateDocById.save();
    res.status(200).json({ data: updateDocById });
  });
