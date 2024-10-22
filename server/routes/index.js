const express = require('express');

const cors = require('cors');

const post = require('./post');
const comment = require('./comment');
const login = require('./login');
const register = require('./register');
const user = require('./user');
const follow = require('./follow');
const notification = require('./notification');
const likes =require('./likes');

const router = express.Router();


router.use('/api/post', post);
router.use('/api/comment', comment);
router.use('/api/login', login);
router.use('/api/register', register);
router.use('/api/user', user);
router.use('/api/follow', follow);
router.use('/api/notification', notification);
router.use('/api/likes', likes);
router.use(cors());

module.exports = router;
