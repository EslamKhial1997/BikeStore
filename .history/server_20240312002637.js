// const cors = require("cors");
// const path = require("path");
// const express = require("express");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const dbCollection = require("./Config/config");
// const RoutesCategory = require("./Routes/RoutesCategories");
// const RoutesSubCategory = require("./Routes/RoutesSubCategories");
// const RoutesBrands = require("./Routes/RoutesBrands");
// const RoutesProducts = require("./Routes/RoutesProducts");
// const RoutesUsers = require("./Routes/RoutesUsers");
// const RoutesAuth = require("./Routes/RoutesAuth");
// const RoutesReviews = require("./Routes/RoutesReviews");
// const RouteCart = require("./Routes/RoutesCarts");

// const RoutesFavorite = require("./Routes/RoutesFavorite");
// const ApiError = require("./Resuble/ApiErrors");
// const globalError = require("./Middleware/globalError");

// const app = express();

// app.use(express.json());
// dotenv.config({ path: "config.env" });
// dbCollection();

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// app.use(cors());
// app.use("/api/v1/categories", RoutesCategory);
// app.use("/api/v1/users", RoutesUsers);
// app.use("/api/v1/Subcategories", RoutesSubCategory);
// app.use("/api/v1/brands", RoutesBrands);
// app.use("/api/v1/products", RoutesProducts);
// app.use("/api/v1/auth", RoutesAuth);
// app.use("/api/v1/cart", RouteCart);
// app.use("/api/v1/review", RoutesReviews);
// app.use("/api/v1/favorite", RoutesFavorite);
// app.use(express.static(path.join(__dirname, "uploads")));

// const PORT = process.env.PORT || 8008;
// const server = app.listen(PORT, () => {
//   console.log(`Listen on the ${PORT}`);
// });
// app.all("*", (req, res, next) => {
//   next(new ApiError(`Sorry This URL ${req.originalUrl} does not exist`, 400));
// });
// app.use(globalError);
// process.on("unhandledRejection", (err) => {
//   console.log(`Error DB ${err.name}`);
//   server.close(() => {
//     process.exit(1);
//   });
// });
