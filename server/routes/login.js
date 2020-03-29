const express = require("express");
const { User } = require('../database/schemas');
const router = express.Router();


module.exports = router;

router.put("/", (req, res) => {
    User.count({email:req.body.profile.email, password:req.body.profile.password}).exec((err, count) => {
        if (count === 0) {
            console.log("Incorrect user or password");
            res.status(201).send("Incorrect user or password");
        }
        else
        {
            res.status(200).send("Successful login! redirect user");
        }
    });
});



