const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    cart: { items: [] },
  },
  {
    name: "Jhon Doe",
    email: "jhon@example.com",
    password: bcrypt.hashSync("123456", 10),
    cart: { items: [] },
  },
  {
    name: "Jane User",
    email: "janen@example.com",
    password: bcrypt.hashSync("123456", 10),
    cart: { items: [] },
  },
];

module.exports = users;
