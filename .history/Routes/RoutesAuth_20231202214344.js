const { Router } = require("express");
const { SingUp,Login, forgetPassword } = require("../Services/AuthService");
const { SignupValidator,LoginValidator } = require("../Resuble/AuthvalidatorError");

// const {
//   createUsersValidator,
//   getOneUserValidator,
//   updateOneUserValidator,
//   deleteOneUserValidator,
//   UpdateUserPassword,
// } = require("../Resuble/UsersvalidatorError");

const Routes = Router();

Routes.route("/signup").post( SignupValidator,SingUp)
Routes.route("/login").post( LoginValidator,Login)
Routes.route("/forgetPassword").post(forgetPassword)
// Routes.route("/:id")
//   .get(getOneUserValidator, getUser) 
//   .put(uploadImage,resizeImageUsers,updateOneUserValidator, updateUser)
//   .delete(deleteOneUserValidator, deleteUser);
module.exports = Routes;
