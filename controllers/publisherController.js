const Publisher = require('../models/publisherModel');

// Create a new publisher
const createPublisher = async (req, res) => {
  const { nama_penerbit, alamat } = req.body;

  try {
    const newPublisher = new Publisher({
      nama_penerbit,
      alamat,
    });

    await newPublisher.save();
    res.json(newPublisher);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all publishers
const getAllPublishers = async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.json(publishers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get publisher by ID
const getPublisherById = async (req, res) => {
  const { id } = req.params;

  try {
    const publisher = await Publisher.findOne({ ID_penerbit: id });
    if (!publisher) {
      return res.status(404).json({ msg: 'Publisher not found' });
    }
    res.json(publisher);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Update publisher by ID
const updatePublisherById = async (req, res) => {
  const { id } = req.params;
  const { nama_penerbit, alamat } = req.body;

  try {
    const publisher = await Publisher.findOneAndUpdate(
      { ID_penerbit: id },
      { nama_penerbit, alamat },
      { new: true }
    );

    if (!publisher) {
      return res.status(404).json({ msg: 'Publisher not found' });
    }

    res.json(publisher);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Delete publisher by ID
const deletePublisherById = async (req, res) => {
  const { id } = req.params;

  try {
    const publisher = await Publisher.findOneAndDelete({ ID_penerbit: id });

    if (!publisher) {
      return res.status(404).json({ msg: 'Publisher not found' });
    }

    res.json({ msg: 'Publisher deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createPublisher,
  getAllPublishers,
  getPublisherById,
  updatePublisherById,
  deletePublisherById,
};
