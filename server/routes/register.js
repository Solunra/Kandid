const express = require("express");
const { User } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

module.exports = router;

const userModel = mongoose.model("User");

router.put("/", (req, res) => {
    var user = new userModel;
    var userTemp = req.body.profile;

    User.count({email: userTemp.email}).exec((err, count) => {

        if (count !== 0) {
            console.log("Username already exists");
            res.status(201).send("Username already exists");
        }
        else
        {
            if(userTemp.confirmPassword===(userTemp.password))
            {
                user.firstname= userTemp.firstname;
                user.lastname = userTemp.lastname;
                user.email = userTemp.email;
                user.password = userTemp.password;
                user.save();
                res.status(200).send("Successful SignUp!");
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
    user0.added_on = 10/13/2020;
    user0.save();
    res.send("[Database has obtained a user]")
});


