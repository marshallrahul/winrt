const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const users = require("./data/users.js");
const products = require("./data/products");
const Product = require("./models/productModel");
const User = require("./models/userModel");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.red.bold);
    process.exit(1);
  }
};

const destroyedData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.red.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyedData();
} else {
  importData();
}
