const express = require("express");
const { User } = require('../database/schemas');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({dest: __dirname + '/images'});

const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {

    if (req.query.email==="")
    {
        User.find().exec((err, user) => {
            if (err) {
                res.status(201).send({message: "There are currently no users"});
            } else {
                res.status(200).send({users: user});
            }
        });
    }

    else
        {
            User.find({'email': req.query.email}).exec((err, user) => {
                if (err) {
                    res.status(201).send({message: "No user with that email exists"});
                } else {
                    res.status(200).send({users: user});
                }
            });
        }

});

