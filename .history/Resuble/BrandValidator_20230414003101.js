const { body, check } = require("express-validator");

exports.createBrandValidator = [
    body("name").isEmpty().
]