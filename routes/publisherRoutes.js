const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');

const {
  createPublisher,
  getAllPublishers,
  getPublisherById,
  updatePublisherById,
  deletePublisherById,
} = require('../controllers/publisherController');

router.post('/', protect, admin, createPublisher);
router.get('/', getAllPublishers);
router.get('/:id', getPublisherById);
router.put('/:id', protect, admin, updatePublisherById);
router.delete('/:id', protect, admin, deletePublisherById);

module.exports = router;
