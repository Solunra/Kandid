const express = require("express");
const { Post } = require('../database/schemas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Post");

const uploadPath = __dirname + "./images/";

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

router.put("/", (req, res) => {
    var post = new postModel;

    post.UserID = "";

    post.Caption = "";
    post.Like = 0;
    var imageFile = req.post.image;
    if(imageFile.size < (30 * Math.pow(10,6))){
        imageFile.mv(uploadPath, (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
        post.ImageLink=resourceLink + imageFile.name;
        post.save();
        res.status(200).send("Post successfully posted");
    }
    else {
        res.status(400).send("Image is too large");
    }
});
