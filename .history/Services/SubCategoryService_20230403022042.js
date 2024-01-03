
const { default: slugify } = require("slugify/slugify");
const asyncHandler = require("express-async-handler");
const createModel = require("../modules/createModel");
const ApiError = require("../Resuble/ApiErrors");

exports.createCategories = asyncHandler(async (req, res) => {
  const {name} = req.body;
  const createCategory = await createModel.create({
    name,
    slug: slugify(name),
  });
  res.status(201).json({ data: createCategory });
});