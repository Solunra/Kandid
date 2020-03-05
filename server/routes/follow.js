const User = require("../database/schemas/User");
const { Follow } = require("../database/schemas");
const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

const followModel = mongoose.model("Follow")

router.put("/", (req, res) => {
  let follower = req.body.follower;
  let followee = req.body.followee;

  let follow = new followModel({
    follower: follower,
    followee: followee
  });

  follow.save(function(err) {
    if (err) {
      return res.status(404).json({
        success: false,
        status: 404,
        data: {},
        message: "There was an error trying to follow the user."
      });
    }
    return res.status(200).json({
      success: true,
      status: 200,
      data: follow,
      message: "Successfully followed user"
    });
  });
});

router.get("/unfollow", (req, res) => {
  let follower = req.body.follower;
  let followee = req.body.followee;

  follow.remove({ follower: follower, followee: followee }, (err, result) => {
    if (err) {
      return res.status(404).json({
        success: false,
        status: 404,
        data: {},
        message: "Error removing record"
      });
    }

    return res.status(201).json({
      success: true,
      status: 201,
      data: {},
      message: "Successfully unfollowed user"
    });
  });
});