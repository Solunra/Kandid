const express = require("express");
const { User } = require('../database/schemas');
const mongoose = require('mongoose');
var multer  = require('multer');
var upload = multer({dest: __dirname + '/images'});

const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
    User.find().exec((err, user) => {
        if (err) {
            res.status(201).send({message: "There are no posts"});
        } else {
            res.status(200).send({users: user});
        }
    });
});
