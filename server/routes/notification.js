const express = require("express");
const { Follower } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

router.put("/", (req, res) => {

Follower.find({UserFollowersID: req.query.email,flag:{ $gt: 0 }}).exec((err, follows) => {
        if(err)
        {
            res.status(201).send("no followers")
        }
        else
        {
            res.status(200).send({follows})
        }
    });
});


