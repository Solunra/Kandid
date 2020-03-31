const express = require("express");
const { Notifications } = require('../database/schemas');
const router = express.Router();

module.exports = router;

router.put("/", (req, res) => {
    Notifications.find({Recipient_Email: req.query.email,Read_At: {$gt: 0},}).exec((err, notification) => {
        if (err) {
            res.status(201).send("Error");
        }
        else {
            res.status(200).send({notifications:notification});
        }
    });
});

router.put("/remove", (req, res) => {
    let myQuery = {Recipient_Email: req.query.email, Read_At: {$gt: 0}};
    Notifications.deleteMany(myQuery).exec();
    res.status(200).send("removed Notification");
});


