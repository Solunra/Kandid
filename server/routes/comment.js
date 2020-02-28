const express = require("express");
const { Comment } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

const commentModel = mongoose.model("Comment");

router.get("/", (req, res) => {
    let id = req.body.PostID;
    Comment.find({PostID: id}).sort('-PostDate').exec((err, comment) => {
        if (err) {
            res.status(200).send({message: "There are no comments"});
        } else {
            res.status(200).send({comments: comment});
        }
    });
});

router.get("/test", (req, res) => {
    const comment0 = new commentModel;
    comment0.UserID = "testID";
    comment0.PostID = "0000000001";
    comment0.Comment = "The following is a test comment: I like doughnuts";
    comment0.save();
    res.send("[Database has received a comment]");
});

router.put("/", (req, res) => {
    var comment = new commentModel;
    comment.UserID = req.user.UserID;
    comment.PostID = req.body.post.PostID;
    comment.Comment = req.body.post.Comment;
    comment.save();
    res.status(200).send("Comment successfully posted");
});
