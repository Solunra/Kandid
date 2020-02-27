const express = require('express');

const cors = require('cors');

const post = require('./post');
const login = require('./login');
const register = require('./register');

const router = express.Router();

router.use('/api/post', post);
router.use('/api/login', login);
router.use('/api/register', register);
router.use(cors());

router.use(cors());

module.exports = router;