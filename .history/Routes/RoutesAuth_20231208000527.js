const { Router } = require("express");
const {
  SingUp,
  Login,
  forgetPassword,
  restCodeSent,
} = require("../Services/AuthService");
const {
  SignupValidator,
  LoginValidator,
} = require("../Resuble/AuthvalidatorError");

// const {
//   createUsersValidator,
//   getOneUserValidator,
//   updateOneUserValidator,
//   deleteOneUserValidator,
//   UpdateUserPassword,
// } = require("../Resuble/UsersvalidatorError");

const Routes = Router();

Routes.route("/signup").post(SignupValidator, SingUp);
Routes.route("/login").post(LoginValidator, Login);
Routes.post("/forgetPassword", forgetPassword);
Routes.post("/restCode", restCodeSent);
Routes.post("/restCode", restNewPassword);
// Routes.route("/:id")
//   .get(getOneUserValidator, getUser)
//   .put(uploadImage,resizeImageUsers,updateOneUserValidator, updateUser)
//   .delete(deleteOneUserValidator, deleteUser);
module.exports = Routes;
