const express = require("express");
const { Post, User, Follower } = require('../database/schemas');
const mongoose = require('mongoose');
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
    User.find({email: req.query.email}).exec((err, userRes) => {
        if (err || userRes === []) {
            res.status(400).send({message: "No user found"});
        }
        else {
            console.log(userRes);
            Follower.find({follower: userRes[0].UserID}).exec((err, followed) => {
                if (err || followed === []) {
                    getAll(req, res);
                } else {
                    const followID = followed.map(follower => {
                            return follower.followee;
                        }
                    );
                    Post.find({UserID: {$in: followID}}).sort('-PostDate').exec((err, post) => {
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
    User.find({email: req.body.UserID}).select('firstname lastname UserID').exec((err, result) => {
      if(err) {
          res.status(400).send({message: "Invalid User"})
      }
      else {
          post.UserID = result[0].UserID;
          post.Name = result[0].firstname + " " + result[0].lastname;
          post.Caption = req.body.Caption;
          post.Like = 0;
          let imageFile = req.files[0];
          post.ImageLink = resourceLink + imageFile.filename;
          post.save().then(
              res.status(200).send("Post successfully posted")
          );
      }
    });

});
