const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/studentController');

//route dibawah ini semua hanya bisa diakses oleh admin, dengan penerapan JWT yang diperoleh saat login sbg admin//
router.post('/', protect, admin, createStudent); // (protect,admin) = merupakan identifikasi jk route hanya dapat dilakukan oleh admin //
router.get('/', protect, admin, getAllStudents);
router.get('/:id', protect, admin, getStudentById);
router.put('/:id', protect, admin, updateStudentById);
router.delete('/:id', protect, admin, deleteStudentById);

module.exports = router;
