const express = require("express");
const { Comment, User } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

module.exports = router;

const commentModel = mongoose.model("Comment");

router.get("/", (req, res) => {
    let id = req.query.PostID;
    Comment.find({'PostID':id}).sort('PostDate').exec((err, comment) => {
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

router.post("/", (req, res) => {
    var comment = new commentModel;
    User.find({email: req.body.email}).exec((err, result) => {
        if(err) {
            res.status(400).send({message: "Invalid User"})
        }
        else {
            console.log(result);
            console.log(result!==[]);
            comment.UserID = ((result !== []) ? (result[0].firstname + " " + result[0].lastname) : ("Unknown User"));
            comment.PostID = req.body.PostID;
            comment.Comment = req.body.Comment;
            comment.save().then(
                res.status(200).send("Comment successfully posted")
        );
        }
    });

});
