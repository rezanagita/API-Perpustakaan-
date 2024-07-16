const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema = new mongoose.Schema({
    nama_kategori: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: false,
    },
});

categorySchema.plugin(AutoIncrement, { inc_field: 'ID_kategori' });

module.exports = mongoose.model('Category', categorySchema);
