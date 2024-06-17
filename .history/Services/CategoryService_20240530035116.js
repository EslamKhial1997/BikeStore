const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const expressAsyncHandler = require("express-async-handler");
const createModel = require("../modules/createModel");
const factory = require("./FactoryHandler");
const { UploadSingleImage } = require("../Middleware/UploadImageMiddleware");

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
  if (req.file) {
    const filename = `category-${uuidv4()}-${Date.now()}.jpeg`;
    await sharp(req.file.buffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/categories/${filename}`);
    req.body.image = filename;
   
  }
  next();
});





// نموذج الصورة في قاعدة البيانات
;

const Image = mongoose.model('Image', ImageSchema);

// الدالة لحذف الصورة من قاعدة البيانات والملفات
async function deleteImageFromDBAndFile(imageId) {
    try {
        // البحث عن الصورة في قاعدة البيانات
        const image = await Image.findById(imageId);
        if (!image) {
            console.log('الصورة غير موجودة في قاعدة البيانات');
            return;
        }

        // حذف الصورة من قاعدة البيانات
        await Image.findByIdAndDelete(imageId);

        // حذف الصورة من ملفات المشروع
        const filePath = path.join(__dirname, image.path);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('خطأ في حذف الصورة من الملفات:', err);
            } else {
                console.log('تم حذف الصورة بنجاح من الملفات');
            }
        });

    } catch (error) {
        console.error('حدث خطأ أثناء الحذف:', error);
    }
}

// استدعاء الدالة مع معرف الصورة المطلوب حذفها
const imageId = 'معرف_الصورة_هنا'; // ضع معرف الصورة هنا
deleteImageFromDBAndFile(imageId);

exports.uploadImage = UploadSingleImage("image");
exports.createCategories = factory.createOne(createModel);
exports.getCategories = factory.getAll(createModel);
exports.getCategoryByID = factory.getOne(createModel);
exports.deleteCategoryByID = factory.deleteOne(createModel);
exports.updateCategory = factory.updateOne(createModel);
