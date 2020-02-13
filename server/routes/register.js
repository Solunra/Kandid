const express = require("express");
const { User } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();
module.exports = router;

const userModel = mongoose.model("User");

router.get("/", (req, res) => {
    User.find().sort('-PostDate').exec((err, user) => {
        if (err) {
            res.status(200).send({message: "There are no users"});
        } else {
            res.status(200).send({users: user});
        }
    });
});

router.get("/test", (req, res) => {
    const user0 = new userModel;
    user0.firstname = "Noah";
    user0.lastname = "Freger";
    user0.username = "noahf303@gmail.com";
    user0.password = "password";
    user0.added_on = 10/13/2020;
    user0.save();
    res.send("[Database has obtained a user]")
});

router.put("/", (req, res) => {
    var user = new userModel;
    user.firstname = req.user.firstname;
    user.lastname = req.user.lastname;
    user.username = req.user.username;
    user.password = req.user.password;
    user.added_on = req.user.added_on;

    user.save();
    res.status(200).send("User succesfully registered");
});