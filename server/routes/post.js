const express = require("express");
const { Post, User, Follower } = require('../database/schemas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({dest: __dirname + '/images'});

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Post");

const resourceLink = "http://localhost:8000/images/";

const getAll = function(req, res) {
    Post.find().sort('-PostDate').exec((err, post) => {
        if (err) {
            res.status(200).send({message: "There are no posts"});
        } else {
            res.status(200).send({posts: post});
        }
    });
};

router.get("/", (req, res) => {
    User.find({email: req.query.email}).select('UserID').exec((err, userRes) => {
        if (err || userRes === undefined) {
            res.status(400).send({message: "No user found"});
        } else {
            Follower.find({followee: userRes.UserID}).exec((err, followed) => {
                if (err || followed === []) {
                    getAll(req, res);
                } else {
                    Post.find({userID: {$in: followed}}).sort('-PostDate').exec((err, post) => {
                        if (err) {
                            res.status(200).send({message: "There are no posts"});
                        } else {
                            res.status(200).send({posts: post});
                        }
                    });
                }
            });
        }
    });
});

router.get("/all", (req, res) => getAll(req, res));

router.get("/test", (req, res) => {
    const post0 = new postModel;
    post0.UserID = "test";
    post0.ImageLink = "test";
    post0.Caption = "Testing this caption~ XOXO";
    post0.Like = 20;
    post0.save();
    res.send("[Database has obtained a post]")
});

router.post("/", upload.array('image', 1), (req, res) => {
    const post = new postModel;
    User.find({email: req.body.UserID}).select('UserID').exec((err, userID) => {
      if(err) {
          res.status(400).send({message: "Invalid User"})
      }
      else {
          post.UserID = userID[0].UserID;
          post.Caption = req.body.Caption;
          post.Like = 0;
          let imageFile = req.files[0];
          post.ImageLink = resourceLink + imageFile.filename;
          post.save();
          res.status(200).send("Post successfully posted");
      }
    });

});
