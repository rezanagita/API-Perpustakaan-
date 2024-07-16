const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createLoan,
  getAllLoans,
} = require('../controllers/loanController');

router.post('/', protect, admin, createLoan);
router.get('/', getAllLoans);

module.exports = router;
