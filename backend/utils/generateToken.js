const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = generateToken;
