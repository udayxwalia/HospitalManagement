const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String, // new
});

module.exports = mongoose.model('Department', departmentSchema);
