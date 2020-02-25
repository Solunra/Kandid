const R = require('ramda');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const followSchema = new Schema({
    UserFollowingID: { type: String },
    UserFollowerID: { type: String }
});

followSchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Follower = mongoose.model('Follower', followSchema);

module.exports = Follower;