const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  inventory: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;