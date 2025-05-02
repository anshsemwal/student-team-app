const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  rollNo: { type: String, required: false },
  year: { type: String, required: false },
  degree: { type: String, required: false },
  aboutProject: { type: String, required: false },
  hobbies: { type: String, required: false },         // Store as comma-separated string
  certificate: { type: String, required: false },
  internship: { type: String, required: false },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Member', memberSchema);
