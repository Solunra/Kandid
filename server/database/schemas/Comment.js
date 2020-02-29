const R = require('ramda');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    UserID: { type: String },
    PostID: { type: String },
    Comment: { type: String },
    PostDate: {type: Date, default: Date.now}
});

commentSchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;