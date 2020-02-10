
const R = require('ramda');
const mongoose = require('mongoose');
const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');
const immutablePlugin = require('mongoose-immutable');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String },
    password: {type: String},
    added_on: {type: Date}
});

userSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: 'User',
    field: 'UserID',
    incrementBy: 1,
    startAt: 1,
    unique: true,
    nextCount: false,
    resetCount: false,
});

userSchema.plugin(immutablePlugin);

userSchema.methods.hide = function() {
    return R.omit(['__v'], this.toObject());
};

const User = mongoose.model('User', userSchema);

module.exports = User;