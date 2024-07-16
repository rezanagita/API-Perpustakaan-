const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const publisherSchema = new mongoose.Schema({
    nama_penerbit: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: false,
    },
});

publisherSchema.plugin(AutoIncrement, { inc_field: 'ID_penerbit' });

module.exports = mongoose.model('Publisher', publisherSchema);
