const mongoose = require("mongoose");
const dbCollection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected"))
    .catch(() => {});
    process.exit(1);
};

module.exports = dbCollection;
