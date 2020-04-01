# JSHint Report

### server\database\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const options = {``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 10 | 1 | ```const database = mongoose.connect('mongodb://127.0.0.1:27017/Kandid', options)``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 11 | 12 | ```    .then(() => console.log('Connected to database.'))``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 12 | 16 | ```    .catch(err => console.error('Error connecting to database:', err.message));``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |### server\database\schemas\Comment.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const commentSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 16 | 1 | ```const Comment = mongoose.model('Comment', commentSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\Follower.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const followSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 14 | 1 | ```const Follower = mongoose.model('Follower', followSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const User = require('./User');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const Comment = require('./Comment');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const Follower = require('./Follower');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const Like = require('./Like');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const Post = require('./Post');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const Notifications = require('./Notifications');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 10 | 5 | ```    User,``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 11 | 5 | ```    Comment,``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 12 | 5 | ```    Follower,``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 13 | 5 | ```    Like,``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 14 | 5 | ```    Post,``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 15 | 5 | ```    Notifications``` | 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\Like.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 2 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const likeSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 15 | 1 | ```const Like = mongoose.model('Like', likeSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\Notifications.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const notificationsSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 16 | 1 | ```const Notifications = mongoose.model('Notifications', notificationsSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\Post.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 2 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const immutablePlugin = require('mongoose-immutable');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 8 | 1 | ```const postSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 33 | 1 | ```const Post = mongoose.model('Post', postSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\database\schemas\User.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 2 | 1 | ```const R = require('ramda');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const { MongooseAutoIncrementID } = require('mongoose-auto-increment-reworked');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const immutablePlugin = require('mongoose-immutable');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const { Schema } = mongoose;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const { Schema } = mongoose;``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 8 | 1 | ```const userSchema = new Schema({``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 32 | 1 | ```const User = mongoose.model('User', userSchema);``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require('express');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const fileUpload = require('express-fileupload');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const app = express();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const port = process.env.port || 8000;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const bodyParser = require('body-parser');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 14 | 1 | ```const routes = require('./routes/index');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 28 | 19 | ```app.listen(port, () => console.log(`Web page started on port ${port}`));``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 28 | 36 | ```app.listen(port, () => console.log(`Web page started on port ${port}`));``` | 'template literal syntax' is only available in ES6 (use 'esversion: 6'). |### server\routes\comment.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Comment, User } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Comment, User } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 9 | 1 | ```const commentModel = mongoose.model("Comment");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 11 | 26 | ```router.get("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 12 | 5 | ```    let id = req.query.PostID;``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 13 | 68 | ```    Comment.find({'PostID':id}).sort('PostDate').exec((err, comment) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 22 | 30 | ```router.get("/test", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 23 | 5 | ```    const comment0 = new commentModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 23 | 26 | ```    const comment0 = new commentModel;``` | Missing '()' invoking a constructor. |
| W119 | 31 | 27 | ```router.post("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W058 | 32 | 23 | ```    var comment = new commentModel;``` | Missing '()' invoking a constructor. |
| W119 | 33 | 57 | ```    User.find({email: req.body.email}).exec((err, result) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W033 | 35 | 60 | ```            res.status(400).send({message: "Invalid User"})``` | Missing semicolon. |### server\routes\follow.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const { Follower, User } = require("../database/schemas");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 1 | 1 | ```const { Follower, User } = require("../database/schemas");``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 10 | 1 | ```const followModel = mongoose.model("Follower");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 12 | 26 | ```router.put("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W058 | 13 | 18 | ```  var follow=new followModel;``` | Missing '()' invoking a constructor. |
| W119 | 15 | 76 | ```  User.find({email: req.query.followee}).select('UserID').exec((err, result) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 21 | 81 | ```      User.find({email: req.query.follower}).select('UserID').exec((err, result2) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 40 | 30 | ```router.get("/test", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 41 | 3 | ```  const follow0 = new followModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 41 | 23 | ```  const follow0 = new followModel;``` | Missing '()' invoking a constructor. |
| W119 | 48 | 34 | ```router.get("/unfollow", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 49 | 3 | ```  let follower = req.body.follower;``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 50 | 3 | ```  let followee = req.body.followee;``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 52 | 75 | ```  Follower.remove({ follower: follower, followee: followee }, (err, result) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |### server\routes\index.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require('express');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const cors = require('cors');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 5 | 1 | ```const post = require('./post');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 6 | 1 | ```const comment = require('./comment');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 7 | 1 | ```const login = require('./login');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 8 | 1 | ```const register = require('./register');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 9 | 1 | ```const user = require('./user');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 10 | 1 | ```const follow = require('./follow');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 11 | 1 | ```const notification = require('./notification');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 13 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\routes\login.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 8 | 26 | ```router.put("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 9 | 100 | ```    User.count({email:req.body.profile.email, password:req.body.profile.password}).exec((err, count) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |### server\routes\notification.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Notifications } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Notifications } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 7 | 26 | ```router.put("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 8 | 102 | ```    Notifications.find({Recipient_Email: req.query.email,Read_At: {$gt: 0},}).exec((err, notification) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 18 | 32 | ```router.put("/remove", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 19 | 5 | ```    let myQuery = {Recipient_Email: req.query.email, Read_At: {$gt: 0}};``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\routes\post.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Post, User, Follower, Notifications } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { Post, User, Follower, Notifications } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 7 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 11 | 1 | ```const postModel = mongoose.model("Post");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 12 | 1 | ```const notificationsModel = mongoose.model("Notifications");         ///new``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 14 | 1 | ```const resourceLink = "http://localhost:8000/images/";``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 16 | 1 | ```const getAll = function(req, res) {``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 17 | 50 | ```    Post.find().sort('-PostDate').exec((err, post) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 26 | 26 | ```router.get("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 27 | 59 | ```    User.find({email: req.query.email}).exec((err, userRes) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 32 | 77 | ```            Follower.find({follower: userRes[0].UserID}).exec((err, followed) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 36 | 21 | ```                    const followID = followed.map(follower => {``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 36 | 60 | ```                    const followID = followed.map(follower => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 40 | 91 | ```                    Post.find({UserID: {$in: followID}}).sort('-PostDate').exec((err, post) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 53 | 29 | ```router.get("/all", (req, res) => getAll(req, res));``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 55 | 30 | ```router.get("/test", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 56 | 5 | ```    const post0 = new postModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 56 | 23 | ```    const post0 = new postModel;``` | Missing '()' invoking a constructor. |
| W033 | 62 | 47 | ```    res.send("[Database has obtained a post]")``` | Missing semicolon. |
| W119 | 65 | 53 | ```router.post("/", upload.array('image', 1), (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 66 | 5 | ```    const post = new postModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 66 | 22 | ```    const post = new postModel;``` | Missing '()' invoking a constructor. |
| W119 | 67 | 94 | ```    User.find({email: req.body.UserID}).select('firstname lastname UserID').exec((err, result) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W033 | 69 | 58 | ```          res.status(400).send({message: "Invalid User"})``` | Missing semicolon. |
| W119 | 73 | 74 | ```          Follower.find({followee: req.body.UserID}).exec((err, followers) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 77 | 19 | ```              for(let i=0;i<followers.length;i++){``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 78 | 19 | ```                  const notification = new notificationsModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 78 | 44 | ```                  const notification = new notificationsModel;``` | Missing '()' invoking a constructor. |
| W033 | 83 | 38 | ```                  notification.save()``` | Missing semicolon. |
| W104 | 94 | 11 | ```          let imageFile = req.files[0];``` | 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |### server\routes\register.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 8 | 1 | ```const userModel = mongoose.model("User");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 10 | 26 | ```router.put("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 11 | 74 | ```    User.countDocuments({email: req.body.profile.email}).exec((err, count) =>``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 20 | 17 | ```                const user = new userModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 20 | 34 | ```                const user = new userModel;``` | Missing '()' invoking a constructor. |
| W119 | 35 | 30 | ```router.get("/test", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W104 | 36 | 5 | ```    const user0 = new userModel;``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W058 | 36 | 23 | ```    const user0 = new userModel;``` | Missing '()' invoking a constructor. |### server\routes\user.js

| Code | Line | Column | Evidence | Reason |
|:----:|:----:|:------:|----------|--------|
| W104 | 1 | 1 | ```const express = require("express");``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 2 | 1 | ```const { User } = require('../database/schemas');``` | 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 3 | 1 | ```const mongoose = require('mongoose');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 4 | 1 | ```const bodyParser = require('body-parser');``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W104 | 8 | 1 | ```const router = express.Router();``` | 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). |
| W119 | 12 | 26 | ```router.get("/", (req, res) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 16 | 36 | ```        User.find().exec((err, user) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |
| W119 | 27 | 66 | ```            User.find({'email': req.query.email}).exec((err, user) => {``` | 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6'). |

---

#### Summary

Found 178 failures - 0 errors - 178 warnings