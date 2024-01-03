const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

const ApiError = require("../Resuble/ApiErrors");
const createModel = require("../modules/createModel");

exports.createSubCategories = asyncHandler(async (req, res) => {
    const name = req.body;
    const createCategories = await createModel.create({
      name,
      slug: slugify(name),
    });
    return res.status(201).json({ data: createCategories });
  });