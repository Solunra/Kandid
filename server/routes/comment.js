const express = require("express");
const { Comment } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

const postModel = mongoose.model("Comment");

router.get("/", (req, res) => {
    Comment.find().sort('-PostDate').exec((err, post) => {
        if (err) {
            res.status(200).send({message: "There are no comments"});
        } else {
            res.status(200).send({posts: post});
        }
    });
});

router.put("/", (req, res) => {
    var comment = new commentModel;
    comment.UserID = req.user.UserID;
    comment.PostID = req.user.PostID;
    comment.Comment = req.body.post.Comment;
    comment.save();
    res.status(200).send("Comment successfully posted");
});
