const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");

const connectDB = require("./config/db");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolves");

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Parsing json data
app.use(express.json());

// app.use(cors({ origin: true, credentials: true }));
// OR
// Allow connection
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

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
  console.log(error);
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
