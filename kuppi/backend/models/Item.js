const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }, // NEW FIELD YOU ADD [cite: 73, 74]
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);