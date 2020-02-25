
const R = require('ramda');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema({
    PostID: { type: String },
    UserID: { type: String }
});

likeSchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;