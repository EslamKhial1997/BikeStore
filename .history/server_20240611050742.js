import cors from "cors";
import { join } from "path";

import morgan from "morgan";
import { config } from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import dbCollection from "./Config/config";
import RoutesCategory from "./Routes/RoutesCategories";
import RoutesSubCategory from "./Routes/RoutesSubCategories";
import RoutesBrands from "./Routes/RoutesBrands";
import RoutesProducts from "./Routes/RoutesProducts";
import RoutesUsers from "./Routes/RoutesUsers";
import RoutesAuth from "./Routes/RoutesAuth";
import RoutesReviews from "./Routes/RoutesReviews";
import RoutesCart from "./Routes/RoutesCarts";
import RoutesCoupon from "./Routes/RoutesCoupon";
import RoutesOrder from "./Routes/RoutesOrders";
import RoutesPayment from "./Routes/RoutesPayment";

import RoutesFavorite from "./Routes/RoutesFavorite";
import RoutesAddress from "./Routes/RoutesAddresses";
import ApiError from "./Resuble/ApiErrors";
import globalError from "./Middleware/globalError";

const app = express();

app.use(json());
config({ path: "config.env" });
dbCollection();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use("/api/v1/categories", RoutesCategory);
app.use("/api/v1/users", RoutesUsers);
app.use("/api/v1/Subcategories", RoutesSubCategory);
app.use("/api/v1/brands", RoutesBrands);
app.use("/api/v1/products", RoutesProducts);
app.use("/api/v1/auth", RoutesAuth);
app.use("/api/v1/cart", RoutesCart);
app.use("/api/v1/review", RoutesReviews);
app.use("/api/v1/favorite", RoutesFavorite);
app.use("/api/v1/address", RoutesAddress);
app.use("/api/v1/coupon", RoutesCoupon);
app.use("/api/v1/order", RoutesOrder);
app.use("/api/v1/payment", RoutesPayment);
app.use(stati(join(__dirname, "uploads")));

const PORT = process.env.PORT || 8008;

const Theserver = createServer(app);
const io = new Server(Theserver, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});
io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("send_message", (data) => {
    console.log(data.message);
    socket.broadcast.emit("message", data);
  });
});
const server = Theserver.listen(PORT, () => {
  console.log(`Listen on the ${PORT}`);
});
app.all("*", (req, res, next) => {
  next(new ApiError(`Sorry This URL ${req.originalUrl} does not exist`, 400));
});
app.use(globalError);
process.on("unhandledRejection", (err) => {
  console.log(`Error DB ${err.name}`);
  server.close(() => {
    process.exit(1);
  });
});
