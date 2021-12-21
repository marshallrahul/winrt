const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({});

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    require: true,
  },
  rating: {
    type: Number,
  },
  reviews: [reviewSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
