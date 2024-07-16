const Loan = require('../models/loanModel');

// Create a new loan
const createLoan = async (req, res) => {
  const { ID_siswa, ID_buku, tanggal_pengembalian } = req.body;

  try {
    const newLoan = new Loan({
      ID_siswa,
      ID_buku,
      tanggal_pengembalian,
    });

    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all loans
const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};


module.exports = {
  createLoan,
  getAllLoans,
};
