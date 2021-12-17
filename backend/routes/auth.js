const express = require("express");
const passport = require("passport");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: { ...req.session.user, token: generateToken(req.session.user._id) },
    });
  }
});

// facebook routes
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureMessage: "Cannot login to Facebook, please try again later!",
    failureRedirect: "http://localhost:3000/signin",
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("http://localhost:3000/");
  }
);

// google routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: "http://localhost:3000/signin",
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("http://localhost:3000/");
  }
);

// facebook routes
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureMessage: "Cannot login to Github, please try again later!",
    failureRedirect: "http://localhost:3000/signin",
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
