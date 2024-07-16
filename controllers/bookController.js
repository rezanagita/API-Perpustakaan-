const Book = require('../models/bookModel');

// Create a new book
const createBook = async (req, res) => {
  const { judul_buku, ID_kategori, ID_penerbit, ISBN, nama_pengarang, jumlah_stok, sinopsis, tahun_terbit } = req.body;

  try {
    const newBook = new Book({
      judul_buku,
      ID_kategori,
      ID_penerbit,
      ISBN,
      nama_pengarang,
      jumlah_stok,
      sinopsis,
      tahun_terbit,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get book by ID_buku
const getBookById = async (req, res) => {
  const { ID_buku } = req.params;

  try {
    const book = await Book.findOne({ ID_buku });

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Update book by ID_buku
const updateBookById = async (req, res) => {
  const { ID_buku } = req.params;
  const { judul_buku, ID_kategori, ID_penerbit, ISBN, nama_pengarang, jumlah_stok, sinopsis, tahun_terbit } = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { ID_buku },
      { judul_buku, ID_kategori, ID_penerbit, ISBN, nama_pengarang, jumlah_stok, sinopsis, tahun_terbit },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Delete book by ID_buku
const deleteBookById = async (req, res) => {
  const { ID_buku } = req.params;

  try {
    const deletedBook = await Book.findOneAndDelete({ ID_buku });

    if (!deletedBook) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    res.json({ msg: 'Book deleted' });
  } catch (error) {
    console.error(`Error in deleteBookById: ${error.message}`);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
