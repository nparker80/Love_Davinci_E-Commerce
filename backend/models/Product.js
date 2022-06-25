const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;