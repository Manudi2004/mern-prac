const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;