const express = require('express');

const post = require('./post');
const login = require('./login');
const register = require('./register');

const router = express.Router();

router.use('/api/post', post);
router.use('/api/login', login);
router.use('/api/register', register);

module.exports = router;