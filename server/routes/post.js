const express = require("express");
const { Post } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

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
    const postModel = mongoose.model("Post");
    const post0 = new postModel;
    post0.UserId = "test";
    post0.ImageLink = "test";
    post0.Caption = "Testing this caption~ XOXO";
    post0.Like = 20;
    post0.save();
    res.send("[Database has obtained a post]")
});
