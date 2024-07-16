const express = require('express');
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require('../controllers/categoryController');

const router = express.Router();

router.route('/')
  .get(getAllCategories)
  .post(protect, admin, createCategory);

router.route('/:id')
  .get(getCategoryById)
  .put(protect, admin, updateCategoryById)
  .delete(protect, admin, deleteCategoryById);

module.exports = router;
