const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const connectDB = require("./config/db");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");

// .env
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// DB config
connectDB();

const app = express();

// Testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Parsing json data
app.use(express.json());

// Allow connection
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn: (err) => {
      if (!err.originalError) {
        return {
          message: err.message,
          locations: err.locations,
          path: err.path,
        };
      }
      const data = err.originalError.data;
      const message = err.message || "An error occured";
      const code = err.originalError.statusCode || 500;
      return {
        message: message,
        data: data,
        statusCode: code,
      };
    },
  })
);

// Error handling
app.use((error, req, res, next) => {
  console.log(`${error}`.red.bold);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
