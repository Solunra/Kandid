const express = require("express");
const { Post } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Post");
const uploadPath = __dirname + "./images/";

router.get("/", (req, res) => {
    Post.find().sort('-PostDate').exec((err, post) => {
        if (err) {
            res.status(200).send({message: "There are no posts"});
        } else {
            res.status(200).send({posts: post});
        }
    });
});

router.get("/test", (req, res) => {
    const post0 = new postModel;
    post0.UserID = "test";
    post0.ImageLink = "test";
    post0.Caption = "Testing this caption~ XOXO";
    post0.Like = 20;
    post0.save();
    res.send("[Database has obtained a post]")
});

router.put("/", (req, res) => {
    var post = new postModel;
    post.UserID = req.user.UserID;
    post.Caption = req.body.post.Caption;
    post.Like = 0;
    var imageFile = req.files.image;
    post.ImageLink = uploadPath + imageFile.name;
    imageFile.mv(post.ImageLink, (err) => {
       if (err) {
           res.status(500).send(err);
       }
    });
    post.save();
    res.status(200).send("Post successfully posted");
});
