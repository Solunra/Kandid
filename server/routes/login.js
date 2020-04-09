const express = require("express");
const { User } = require('../database/schemas');
const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = router;

router.put("/", (req, res) => {

    User.find({email:req.body.profile.email}).exec((err, user) => {
        if(err){
             res.status(203).send("Error");
        }
        else if (user.length === 0) {
            res.status(201).send("Incorrect user");
        }
        else
        {
            bcrypt.compare(req.body.profile.password, user[0].password, function(err, result) {
               if(err){
                    res.status(203).send("Error");
               }
               else if(result){
                 res.status(200).send("Successful login! redirect user");
               }
               else{
                    res.status(202).send("Incorrect password");
               }
            });
        }
    });
});



