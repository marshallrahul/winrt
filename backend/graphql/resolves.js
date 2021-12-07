const Product = require("../models/productModel");

module.exports = {
  products: async function (req) {
    const products = await Product.find();
    return products.map((product) => {
      return {
        ...product.toJSON(),
      };
    });
  },
};
