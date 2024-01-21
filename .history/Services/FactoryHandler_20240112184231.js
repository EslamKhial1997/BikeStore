const expressAsyncHandler = require("express-async-handler");
const ApiError = require("../Resuble/ApiErrors");
const FeatureApi = require("../Utils/Feature");

exports.createOne = (Model) =>
  expressAsyncHandler(async (req, res) => {
    const createDoc = await Model.create(req.body);
    res.status(201).json({ data: createDoc });
  });
exports.getAll = (Model, keyword) =>
  expressAsyncHandler(async (req, res) => {
    const countDocs = await Model.countDocuments();
    const ApiFeatures = new FeatureApi(Model.find(), req.query)
      .Fillter()
      .Sort()
      .Fields()
      .Search(keyword)
      .Paginate(countDocs);
    const { MongooseQueryApi, PaginateResult } = ApiFeatures;
    const getDoc = await MongooseQueryApi;
    res
      .status(200)
      .json({ results: getDoc.length, PaginateResult, data: getDoc });
  });
exports.getOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const getDocById = await Model.findById(req.params.id);
    if (!getDocById)
      next(
        new ApiError(`Sorry Can't get This ID From ID :${req.params.id}`, 404)
      );
    res.status(200).json({ data: getDocById });
  });
exports.deleteOne = (Model) =>
  expressAsyncHandler(async (req, res, next) => {
    const deleteDoc = await Model.findByIdAndDelete(req.params.id);
    if (!deleteDoc) {
      next(
        new ApiError(
          `Sorry Can't Delete This ID From ID :${req.params.id}`,
          404
        )
      );
      document.remove();
      res.status(200).send();
    }
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
    res.status(200).json({ data: updateDocById });
  });
