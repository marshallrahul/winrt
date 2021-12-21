const express = require("express");
const dotenv = require("dotenv");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = require("../middlewares/is-auth");

const router = express.Router();

// .env
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// @desc Add to cart
// @route POST /api/cart
// @access Private
router.post(
  "/cart",
  protect,
  asyncHandler(async (req, res, next) => {
    const { prodId, quantity } = req.body;

    const user = await User.findById(req.userId);
    let newQuantity;
    const updatedCartItems = [...user.cart.items];

    const cartProductIndex = user.cart.items.findIndex((cp) => {
      return cp.productData.toString() === prodId.toString();
    });

    if (cartProductIndex !== -1) {
      newQuantity = quantity;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productData: prodId,
        quantity: quantity,
      });
    }
    const updatedCart = {
      items: updatedCartItems,
    };
    user.cart = updatedCart;
    return user.save();
  })
);

router.get(
  "/cart",
  protect,
  asyncHandler(async (req, res, next) => {
    const user = await req.user.populate("cart.items.productData");

    res.json(user.cart.items);
  })
);

module.exports = router;
