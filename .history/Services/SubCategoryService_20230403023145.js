
const { default: slugify } = require("slugify/slugify");
const asyncHandler = require("express-async-handler");
const createModel = require("../modules/createModel");


exports.createSubCategories = asyncHandler(async (req, res) => {
  const {name ,category} = req.body;
  const createSubCategory = await createSub.create({
    name,
    slug: slugify(name),
    category
  });
  res.status(201).json({ data: createSubCategory });
});