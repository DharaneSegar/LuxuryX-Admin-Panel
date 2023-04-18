const express = require("express");
const router = new express.Router();
let User = require("../models/User");


//fetch all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
