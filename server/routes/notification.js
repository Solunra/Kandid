const express = require("express");
const { Follower } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

module.exports = router;

router.get("/", (req, res) => {

    Follower.find({email:userTemp.email}).count().exec((err, count) => {


    Follower.find().sort('-PostDate').exec((err, post) => {
        if (err) {
            res.status(200).send({message: "There are no posts"});
        } else {
            res.status(200).send({posts: post});
        }
    });
});