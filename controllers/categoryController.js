const Category = require('../models/categoryModel');

// Create a new category
const createCategory = async (req, res) => {
  const { nama_kategori, deskripsi } = req.body;

  try {
    const newCategory = new Category({
      nama_kategori,
      deskripsi,
    });

    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({ ID_kategori: id });
    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Update category by ID
const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { nama_kategori, deskripsi } = req.body;

  try {
    const category = await Category.findOneAndUpdate(
      { ID_kategori: id },
      { nama_kategori, deskripsi },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Delete category by ID
const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOneAndDelete({ ID_kategori: id });

    if (!category) {
      return res.status(404).json({ msg: 'Category not found' });
    }

    res.json({ msg: 'Category deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
