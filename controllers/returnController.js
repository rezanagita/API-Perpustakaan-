const Return = require('../models/returnModel');
const Loan = require('../models/loanModel');

// Create a new return
const createReturn = async (req, res) => {
  const { ID_siswa, ID_buku, ID_peminjaman, tanggal_pengembalian } = req.body;

  try {
    const newReturn = new Return({
      ID_siswa,
      ID_buku,
      ID_peminjaman,
      tanggal_pengembalian,
    });

    // Perhitungan denda jika terlambat
    const pengembalian = new Date(tanggal_pengembalian);
    const peminjaman = await Loan.findOne({ ID_peminjaman });
    const batasPengembalian = new Date(peminjaman.tanggal_pengembalian);
    let denda = 0;
    if (pengembalian > batasPengembalian) {
      const selisihHari = Math.ceil((pengembalian - batasPengembalian) / (1000 * 60 * 60 * 24));
      denda = selisihHari * 5000; 
    }

    // Simpan denda ke dalam objek return
    newReturn.denda = denda;

    await newReturn.save();
    res.status(201).json(newReturn);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Get all returns
const getAllReturns = async (req, res) => {
  try {
    const returns = await Return.find();
    res.json(returns);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};



module.exports = {
  createReturn,
  getAllReturns,
};
