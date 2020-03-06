const { Follower } = require("../database/schemas");
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());


module.exports = router;

const followModel = mongoose.model("Follower");

router.put("/", (req, res) => {
  var follow=new followModel;
  follow.followee=req.query.followee;
  follow.follower=req.query.follower;
  follow.notificationFlag=0;
  console.log(follow);
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
