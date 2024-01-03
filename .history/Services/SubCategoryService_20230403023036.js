
const { default: slugify } = require("slugify/slugify");
const asyncHandler = require("express-async-handler");
const createModel = require("../modules/createModel");


exports.createSubCategories = asyncHandler(async (req, res) => {
  const {name} = req.body;
  const createSubCategory = await createModel.create({
    name,
    slug: slugify(name),
    c
  });
  res.status(201).json({ data: createSubCategory });
});