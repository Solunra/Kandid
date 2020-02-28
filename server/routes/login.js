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
    var userTemp= JSON.parse(req.body.profile);

    User.find({email:userTemp.email,password:userTemp.password}).count().exec((err, count) => {
        if (count == 0) {
            console.log("Incorrect user or password");
            res.status(201).send("Incorrect user or password");
        }
        else
        {
            res.status(200).send("Successful login! redirect user");
        }
    });
});



