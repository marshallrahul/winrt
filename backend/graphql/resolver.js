const Product = require("../models/productModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const dotenv = require("dotenv");

// .env
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

module.exports = {
  products: async function (req) {
    const products = await Product.find();
    return products.map((product) => {
      return {
        ...product.toJSON(),
      };
    });
  },

  product: async function ({ prodId }) {
    const product = await Product.findById(prodId);
    return {
      ...product.toJSON(),
    };
  },

  addToCart: async function ({ id }) {},

  createUser: async function ({ inputData }) {
    const existingUser = await User.findOne({ email: inputData.email });
    if (existingUser) {
      const error = new Error(
        "E-Mail already exist, please pick a different one"
      );
      error.statusCode = 422;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(inputData.password, 12);
    const user = await User.create({
      name: inputData.name,
      email: inputData.email,
      password: hashedPassword,
    });

    return {
      ...user.toJSON(),
      token: generateToken(user._id),
    };
  },

  login: async function ({ email, password }) {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with that email could not be found!");
      error.statusCode = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      const error = new Error("Wrong password");
      error.statusCode = 401;
      throw error;
    }
    const token = generateToken(user._id);
    return {
      ...user.toJSON(),
      token: token,
    };
  },
};
