const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/login/success", (req, res) => {
  // console.log(req.session.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.session.user,
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
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/signin",
  })
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
    // console.log("User: ", req.user);
    req.session.user = req.user;
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
