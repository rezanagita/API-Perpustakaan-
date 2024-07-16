const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const loanSchema = new mongoose.Schema({
  ID_siswa: {
    type: Number,
    required: true,
  },
  ID_buku: {
    type: Number,
    required: true,
  },
  tanggal_peminjaman: {
    type: Date,
    required: true,
    default: Date.now,
  },
  tanggal_pengembalian:{
    type: Date,
    required: true,
    },
  status: {
    type: String,
    enum: ['dipinjam', 'dikembalikan'],
    default: 'dipinjam',
  },
});

loanSchema.plugin(AutoIncrement, { inc_field: 'ID_peminjaman' });

module.exports = mongoose.model('Loan', loanSchema);
