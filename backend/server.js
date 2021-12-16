const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");
const authRoute = require("./routes/auth");

// .env
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// DB config
connectDB();

// App
const app = express();

// Allow connection
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Parsing json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sessions
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Testing
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
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

// Routes
app.use("/auth", authRoute);

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
