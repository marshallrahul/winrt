const dotenv = require("dotenv");
const User = require("../models/userModel.js");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// .env
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

module.exports = function (passport) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:5000/auth/facebook/callback",
        profileFields: [
          "id",
          "email",
          "gender",
          "link",
          "locale",
          "name",
          "timezone",
          "updated_time",
          "verified",
        ],
      },
      function (accessToken, refreshToken, profile, cb) {
        // console.log(profile);
        console.log(
          `FACEBOOK BASED OAUTH VALIDATION GETTING CALLED`.underline.brightGreen
        );
        User.findOne({
          email: profile.emails[0].value,
        }).then((existingUser) => {
          if (existingUser) {
            return cb(null, existingUser);
          } else {
            new User({
              name: profile.displayName,
              email: profile.emails[0].value,
            })
              .save()
              .then((user) => {
                return cb(null, user);
              });
          }
        });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        console.log(
          `GOOGLE BASED OAUTH VALIDATION GETTING CALLED`.underline.brightGreen
        );
        User.findOne({
          email: profile.emails[0].value,
        }).then((existingUser) => {
          if (existingUser) {
            return cb(null, existingUser);
          } else {
            new User({
              name: profile.displayName,
              email: profile.emails[0].value,
            })
              .save()
              .then((user) => {
                return cb(null, user);
              });
          }
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    // console.log("Serializing user:", user);
    done(null, user);
  });

  passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({ where: { id } }).catch((err) => {
      console.log("Error deserializing", err);
      cb(err, null);
    });

    // console.log("DeSerialized user", id);

    if (user) cb(null, user);
  });
};
