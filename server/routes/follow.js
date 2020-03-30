const { Follower, User } = require("../database/schemas");
const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();



module.exports = router;

const followModel = mongoose.model("Follower");

router.put("/", (req, res) => {
  var follow=new followModel;
  follow.notificationFlag=0;
  User.find({email: req.query.followee}).select('UserID').exec((err, result) => {
    if(err || result === undefined ) {
      res.status(400).send({message: "Error: No user found"});
    }
    else {
      follow.followee = result[0].UserID;
      User.find({email: req.query.follower}).select('UserID').exec((err, result2) => {
        if (err || result2 === undefined) {
          res.status(400).send({message: "Error: No user found"});
        }
        else {
          follow.follower = result2[0].UserID;
          follow.save(function(err) {
            if (err) {
              res.status(400).send({success: false, data: {}, message: "There was an error trying to follow the user."});
            }
            else {
              res.status(200).send({success: true, data: follow, message: "Successfully followed user"});
            }
          });
        }
      });
    }
  });
});
router.get("/test", (req, res) => {
  const follow0 = new followModel;
  follow0.follower = "testFollower";
  follow0.followee = "testFollowee";
  follow0.notificationFlag=0;
  follow0.save();
  res.send("[Follow has been saved to the Database]");
});
router.get("/unfollow", (req, res) => {
  let follower = req.body.follower;
  let followee = req.body.followee;
  //TODO: update this when unfollow option has been added onto the front end
  Follower.remove({ follower: follower, followee: followee }, (err, result) => {
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
