const { check } = require("express-validator");
const {
  MiddlewareValidator,
} = require("../Middleware/MiddlewareValidatorError");
const { default: slugify } = require("slugify");
const createUsersModel = require("../modules/createUsers");
const bcrypt = require("bcrypt");
var CryptoJS = require("crypto-js");
exports.createUsersValidator = [
  check("name")
    .notEmpty()
    .withMessage("is required Name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("password")
    .notEmpty()
    .withMessage("is required Password")
    .withMessage("To Shoort Password To CreateUser Validator"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("To Shoort Password To CreateUser Validator")
    .custom((val, { req }) => {
      if (val !== req.body.passwordConfirm) {
        throw new Error("Password Confirmation incorrect");
      }
      return true;
    }),
  check("passwordConfirm")
    .notEmpty()
    .withMessage("Password confirmation required"),

  check("email").notEmpty().withMessage("is required E-mail"),
  check("email")
    .isEmail()
    .withMessage("Must be at E-mail Address")
    .custom((val) =>
      createUsersModel.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already in user"));
        }
      })
    ),

  check("phone")
    .optional()
    .isMobilePhone(["ar-EG", "ar-SA"])
    .withMessage("Invailable phone number EG , SA Number Only accepted"),

  check("imageProfile").optional(),
  check("role").optional(),
  check("active").optional(),
  MiddlewareValidator,
];

exports.getOneUserValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To get"),
  MiddlewareValidator,
];
exports.updateOneUserValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Update"),
  check("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("imageProfile").optional(),
  MiddlewareValidator,
];
exports.deleteOneUserValidator = [
  check("id").isMongoId().withMessage("Sorry ID Not Available To Delete"),
  MiddlewareValidator,
];
exports.UpdateUserPassword = [
  check("id").isMongoId().withMessage("Sorry ID Not Available"),
  check("currentPasword")
    .notEmpty()
    .withMessage("you Must enter Old password "),
  check("passwordConfirm")
    .notEmpty()
    .withMessage("you Must enter belong password "),
  check("password")
    .notEmpty()
    .withMessage("you Must enter password ")
    .custom(async (val, { req }) => {
      const user = await createUsersModel.findById(req.params.id);

      if (!user) {
        throw new Error("Old Password does not match");
      }
      // const iscorrectPassword = await bcrypt.compare(
      //   req.body.currentPasword,
      //   user.password
      // );

      // var ciphertext = CryptoJS.AES.encrypt(
      //   JSON.stringify(user.password),
      //   process.env.ENCRYPT
      // ).toString();
      //       var bytes  = CryptoJS.AES.decrypt(req.body.currentPasword, process.env.ENCRYPT);
      // var decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    // const  decryptedData= CryptoJS.AES.decrypt(
    //   user.password,
    //     "secret key 123"
    //   ).toString()
    //   console.log(decryptedData);
    var encrypted = CryptoJS.AES.encrypt(passWord, key, { iv: iv }).toString();
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { iv: iv }).toString();

    console.log(decrypted);
      // if (ciphertext === user.password) {
      //   console.log("yes");
      // }
      // if (!iscorrectPassword) {
      //   throw new Error("in Correct CurentPassword");
      // }
      if (val !== req.body.passwordConfirm) {
        throw new Error("in Correct passwordConfirm");
      }
    }),
  MiddlewareValidator,
];
