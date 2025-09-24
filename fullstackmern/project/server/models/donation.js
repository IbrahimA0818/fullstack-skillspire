const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: [true, 'Restaurant name is required'],
    trim: true,
    maxlength: [255, 'Name cannot exceed 255 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\+?[\d\s\-()]+$/, 'Please enter a valid phone number']
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  foodType: {
    type: String,
    enum: [
      'prepared_food',
      'fresh_produce',
      'baked_goods',
      'packaged_food',
      'dairy',
      'meat',
      'beverages',
      'other'
    ],
    required: [true, 'Food type is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  // New fields for claiming functionality
  isClaimed: {
    type: Boolean,
    default: false
  },
  claimedBy: {
    type: String,
    default: null // Will store recipient's email/username
  },
  claimedAt: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Donation', donationSchema);