const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controllers/bookController');

router.post('/', protect, admin, createBook);
router.get('/', getAllBooks);
router.get('/:ID_buku', getBookById);
router.put('/:ID_buku', protect, admin, updateBookById);
router.delete('/:ID_buku', protect, admin, deleteBookById);

module.exports = router;
