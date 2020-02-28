const express = require("express");
const { Post } = require('../database/schemas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({dest: __dirname + '/images'});

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Post");

const resourceLink = "http://localhost:8000/images/";
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

router.post("/", upload.array('image', 1), (req, res) => {
    const post = new postModel;
    post.UserID = "";
    post.Caption = req.body.Caption;
    post.Like = 0;
    let imageFile = req.files[0];
    post.ImageLink = resourceLink + imageFile.filename;
    post.save();
    res.status(200).send("Post successfully posted");
});
