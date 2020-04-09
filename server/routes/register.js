const express = require("express");
const { User } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = router;

const userModel = mongoose.model("User");

const saltRounds = 10;

router.put("/", (req, res) => {
    User.countDocuments({email: req.body.profile.email}).exec((err, count) =>
    {
        if (count !== 0) {
            res.status(201).send("Username already exists");
        }
        else
        {
            if(req.body.profile.confirmPassword === req.body.profile.password)
            {
                bcrypt.hash(req.body.profile.password, saltRounds, function(err, hash) {
                    if(err){
                        res.status(203).send("Error");
                    }
                    else{
                        const user = new userModel;
                        user.firstname = req.body.profile.firstname;
                        user.lastname = req.body.profile.lastname;
                        user.email = req.body.profile.email;
                        user.password = hash;
                        user.save().then(res.status(200).send("Successful SignUp!"));
                    }
                });
            }
            else
            {
                res.status(202).send("password not same");
            }
        }
    });
});

router.get("/test", (req, res) => {
    const user0 = new userModel;
    user0.firstname = "Noah";
    user0.lastname = "Freger";
    user0.email = "noahf303@gmail.com";
    user0.password = "password";
    user0.save().then(res.status(200).send("[Database has obtained a user]"));
});


