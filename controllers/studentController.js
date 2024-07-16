const Student = require('../models/studentModel');

// Create a new student
const createStudent = async (req, res) => {
  const { nama, jenis_kelamin, kelas } = req.body;

  try {
    const newStudent = new Student({
      nama,
      jenis_kelamin,
      kelas,
    });

    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findOne({ ID_siswa: id });

    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Update student by ID
const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { nama, jenis_kelamin, kelas } = req.body;

  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { ID_siswa: id },
      { nama, jenis_kelamin, kelas },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    res.json(updatedStudent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Delete student by ID
const deleteStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findOneAndDelete({ ID_siswa: id });

    if (!deletedStudent) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    res.json({ msg: 'Student deleted' });
  } catch (error) {
    console.error(`Error in deleteStudentById: ${error.message}`);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};
