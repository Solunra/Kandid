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

router.put("/", (req, res) => {git
    var user = new userModel;
    var check1=true, check2 = true;
    console.log(req.body);
    if(User.find({email:req.body.email}).count() != 0)
    {
        check1 = false;
    }

    if(!(req.body.confirmPassword===(req.body.password)))
    {
        check2=false;
    }
    console.log("check1:" + check1);
    console.log("check2:" + check2);
    if(check1 && check2)
    {
        user.firstname= req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save();
        res.status(200).send("User succesfully registered");
    }
    else{
        res.status(201).send("User did not succesfully registered");
    }

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


