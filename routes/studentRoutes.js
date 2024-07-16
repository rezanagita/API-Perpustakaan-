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


router.post('/', protect, admin, createStudent);
router.get('/', protect, admin, getAllStudents);
router.get('/:id', protect, admin, getStudentById);
router.put('/:id', protect, admin, updateStudentById);
router.delete('/:id', protect, admin, deleteStudentById);

module.exports = router;
