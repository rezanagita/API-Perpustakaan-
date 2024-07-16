const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const bookSchema = new mongoose.Schema({
  judul_buku: {
    type: String,
    required: true,
  },
  ID_kategori: {
    type: Number,
    required: true,
  },
  ID_penerbit: {
    type: Number,
    required: true,
  },
  ISBN: {
    type: Number,
    required: true,
    unique: true,
  },
  nama_pengarang: {
    type: String,
    required: true,
  },
  jumlah_stok: {
    type: Number,
    required: true,
  },
  sinopsis: {
    type: String,
    required: true,
  },
  tahun_terbit: {
    type: Number,
    required: true,
  },
});

bookSchema.plugin(AutoIncrement, { inc_field: 'ID_buku' });

module.exports = mongoose.model('Book', bookSchema);
