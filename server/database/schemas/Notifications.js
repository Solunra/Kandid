const R = require('ramda');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationsSchema = new Schema({
    Recipient_Email: { type: String },
    Actor_Email: { type: String },
    Message:{type: String},
    Read_At: { type: Number },
});

notificationsSchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Notifications = mongoose.model('Notifications', notificationsSchema);

module.exports = Notifications;