const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const studentSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  jenis_kelamin: {
    type: String,
    enum: ['perempuan', 'laki-laki'],
    required: true,
  },
  kelas: {
    type: String,
    required: true,
  },
});

studentSchema.plugin(AutoIncrement, { inc_field: 'ID_siswa' });
module.exports = mongoose.model('Student', studentSchema);
