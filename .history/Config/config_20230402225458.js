const mongoose = require("mongoose");

const dbCollection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected With DB"))
   
};

module.exports = dbCollection;
