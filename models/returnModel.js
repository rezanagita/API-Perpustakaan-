const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const returnSchema = new mongoose.Schema({
  ID_siswa: {
    type: Number,
    required: true,
  },
  ID_buku: {
    type: Number,
    required: true,
  },
  ID_peminjaman: {
    type: Number,
    required: true,
  },
  tanggal_pengembalian: {
    type: Date,
    required: true,
    default: Date.now,
  },
  denda: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    // enum: ['dikembalikan'],
    default: 'dikembalikan',
  }
},{
    timestamps: true
  });

returnSchema.plugin(AutoIncrement, { inc_field: 'ID_pengembalian' });

module.exports = mongoose.model('Return', returnSchema);
