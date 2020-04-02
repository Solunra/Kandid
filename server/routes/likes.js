const express = require("express");
const { Like, User, Post } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();

const LikeModel = mongoose.model("Like");

module.exports = router;

router.post("/update", (req, res) => {
    Post.updateOne({'PostID': req.query.PostID}, {Like: req.query.likes}).exec((err, res) => {
        if (err){
            res.status(200).send({message: "Post not found"})
        }
        else{
            res.status(200)
        }
    })
})

router.get("/", (req, res) => {
    Post.find({'PostID': req.query.PostID}).exec((err, res) => {
        if (err){
            res.status(200).send({message: "error finding post"})
        }
        else{
            res.status(200).send(Post)
        }
    })
})
