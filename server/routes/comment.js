const express = require("express");
const { Comment } = require('../database/schemas');
const mongoose = require('mongoose')

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Comment");

router.get("/", (req, res) => {
    Post.find().sort('-PostDate').exec((err, post) => {
        if (err) {
            res.status(200).send({message: "There are no posts"});
        } else {
            res.status(200).send({posts: post});
        }
    });
});