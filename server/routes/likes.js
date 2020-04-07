const express = require("express");
const { Post } = require('../database/schemas');
const mongoose = require('mongoose');

const router = express.Router();


module.exports = router;

router.post("/update", (req, res) => {
    let id = req.body.PostID;
    let count = req.body.likes;
    console.log(id+" "+count)
    Post.updateOne({'PostID': id}, {Like: count}).exec((err, result) => {
        if (err){
            res.status(400).send({message: "Post not found"})
        }
        else{
            res.status(200).send({message: " everything is fine "})
        }
    })
})

router.get("/", (req, res) => {
    Post.find({'PostID': req.query.PostID}).exec((err, result) => {
        if (err){
            res.status(200).send({message: "error finding post"})
        }
        else{
            res.status(200).send(result)
        }
    })
})
