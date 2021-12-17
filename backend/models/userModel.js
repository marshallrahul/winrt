const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // TODO: Add social accounts IDs
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  cart: {
    items: [
      {
        productData: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
