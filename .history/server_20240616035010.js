const cors = require("cors");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const dbCollection = require("./Config/config");
const RoutesCategory = require("./Routes/RoutesCategories");
const RoutesSubCategory = require("./Routes/RoutesSubCategories");
const RoutesBrands = require("./Routes/RoutesBrands");
const RoutesProducts = require("./Routes/RoutesProducts");
const RoutesUsers = require("./Routes/RoutesUsers");
const RoutesAuth = require("./Routes/RoutesAuth");
const RoutesReviews = require("./Routes/RoutesReviews");
const RoutesCart = require("./Routes/RoutesCarts");
const RoutesCoupon = require("./Routes/RoutesCoupon");
const RoutesOrder = require("./Routes/RoutesOrders");
const RoutesPayment = require("./Routes/RoutesPayment");

const RoutesFavorite = require("./Routes/RoutesFavorite");
const RoutesAddress = require("./Routes/RoutesAddresses");
const ApiError = require("./Resuble/ApiErrors");
const globalError = require("./Middleware/globalError");
const createChatModel = require("./modules/createChatModel");


const app = express();

app.use(express.json());
dotenv.config({ path: "config.env" });
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
app.use(express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;

const Theserver = http.createServer(app);
const io = new Server(Theserver, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on('connection', async(socket) => {
  console.log('New client connected');
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    console.log(`${username} joined room ${room}`);
  });
  socket.on('sendMessage', async (data) => {
    const { sender, receiver, message } = data;
    const messageData =await new createChatModel({ sender, receiver, message });

    messageData.then(() => {
      io.to(receiver).emit('newMessage', messageData);
      io.to(sender).emit('newMessage', messageData); // إرسال الرسالة للمرسل أيضا
    });
  });
  

  socket.on('disconnect', () => {
    console.log('Client disconnected');
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
