const express = require("express");
const { Follower } = require('../database/schemas');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

router.put("/", (req, res) => {

Follower.find({follower: req.query.email,notificationFlag: {$gt: 0}}).count().exec((err, test) => {

        if(test > 0)
        {
            console.log(test);
            res.status(222).send("Send notification");
        }
        else
        {
            res.status(223).send("no notification");
        }
    });
});

router.put("/remove", (req, res) => {
    let myQuery = {follower: req.query.email, notificationFlag: {$gt: 0}};
    let newValues = { $set: {notificationFlag: 0} };
    Follower.updateMany(myQuery, newValues).exec();
    console.log("remove notification");
    res.status(224).send("removed Notification");

});


