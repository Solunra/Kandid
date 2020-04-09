
const R = require('ramda');
const mongoose = require('mongoose');
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');
const immutablePlugin = require('mongoose-immutable');
const { Schema } = mongoose;

const postSchema = new Schema({
    Name: { type: String },
    UserID: { type: String },
    ImageLink: { type: String },
    Caption: { type: String },
    Like: { type: Number },
    PostDate: {type: Date, default: Date.now}
});

postSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'Post',
    field: 'PostID',
    incrementBy: 1,
    startAt: 1,
    unique: true,
    nextCount: false,
    resetCount: false,
});

postSchema.plugin(immutablePlugin);

postSchema.methods.hide = function() {
    return R.omit(['__v', 'survey'], this.toObject());
};

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
