const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createReturn,
  getAllReturns,
} = require('../controllers/returnController');

router.post('/', protect, admin, createReturn);
router.get('/', getAllReturns);

module.exports = router;
