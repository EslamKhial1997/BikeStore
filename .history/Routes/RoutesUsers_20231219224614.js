const { Router } = require("express");
const {
  createUsers,
  getUsers,
  updateUser,
  deleteUser,
  getUser,
  updatePassword,
  uploadImage,
  resizeImageUsers,
  updateLoggedUserPassword,
  getLoggedUserData,
} = require("../Services/UsersService");
const {
  createUsersValidator,
  getOneUserValidator,
  updateOneUserValidator,
  deleteOneUserValidator,
  UpdateUserPassword,
} = require("../Resuble/UsersvalidatorError");
const { protect, allowedTo } = require("../Services/AuthService");
const Routes = Router();
Routes.use(protect("admin", "user"));
Routes.get("/getMe", getLoggedUserData, getUser);
Routes.put("/changePassword/:id", UpdateUserPassword, updatePassword);
Routes.put("/changeUserPassword", updateLoggedUserPassword);
Routes.use(allowedTo("admin" ,""))
Routes.route("/")
  .post(uploadImage, resizeImageUsers, createUsersValidator, createUsers)
  .get(getUsers);
Routes.route("/:id")
  .get(getOneUserValidator, getUser)
  .put(uploadImage, resizeImageUsers, updateOneUserValidator, updateUser)
  .delete(deleteOneUserValidator, deleteUser);
module.exports = Routes;
