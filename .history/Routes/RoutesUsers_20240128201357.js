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
  updateLoggedUserData,
  passwordDashboard,
  updatePasswordDashboard,
  LoginDashboard,
  updateLoggedUserPasswordDashboard,
} = require("../Services/UsersService");
const {
  createUsersValidator,
  getOneUserValidator,
  updateOneUserValidator,
  deleteOneUserValidator,
  UpdateUserPassword,
  updateLoggedUserValidator,
  LoginDashboardValidator,
} = require("../Resuble/UsersvalidatorError");
const { protect, allowedTo, forgetPassword, restCodeSent, restNewPassword } = require("../Services/AuthService");

const Routes = Router();

// Only Access the Logged Users
Routes.use(protect);
Routes.get("/getMe", getLoggedUserData, getUser);
Routes.put(
  "/updateMe",
  uploadImage,
  resizeImageUsers,
  updateLoggedUserValidator,
  updateLoggedUserData
);
Routes.put("/updateMyPasswordDashboard", updateLoggedUserPasswordDashboard);
Routes.put("/changePassword/:id", UpdateUserPassword, updatePassword);
Routes.put("/changeUserPassword", updateLoggedUserPassword);
Routes.post("/forgetPassword", forgetPassword);
Routes.post("/restCode", restCodeSent);
Routes.put("/restNewPassworddash", restNewPassword("passwordDB"));
// Only Access the Admin
Routes.use(allowedTo("admin", "manger"));
Routes.route("/")
  .post(uploadImage, resizeImageUsers, createUsersValidator, createUsers)
  .get(getUsers);
Routes.route("/:id")
  .get(getOneUserValidator, getUser)
  .put(uploadImage, resizeImageUsers, updateOneUserValidator, updateUser)
  .delete(deleteOneUserValidator, deleteUser);
Routes.route("/passwordDashboard").post(passwordDashboard);
Routes.route("/loginDashboard").post(LoginDashboardValidator,LoginDashboard);
Routes.route("/updatepasswordDashboard/:id").put(updatePasswordDashboard);
module.exports = Routes;
