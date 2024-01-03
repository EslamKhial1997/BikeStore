const slugify = require("slugify");
const asyncHandler = require("express-async-handler");
const createSubCategories = require("../modules/createSubCategory");

exports.createSubCategories = asyncHandler(async (req, res) => {
    const {name,category} = req.body;
    const createSubCategorie = await createSubCategories.create({
      name,
      slug: slugify(name),
      category
    });
    return res.status(201).json({ data: createSubCategorie });
  });