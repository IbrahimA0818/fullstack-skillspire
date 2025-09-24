const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String, //Data type: text 
    required: true,
    trim: true  // Remove whitespace from both start/ ends
  },
  description: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);