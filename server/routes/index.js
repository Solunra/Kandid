const express = require('express');

const post = require('./post');

const router = express.Router();

router.use('/api/post', post);

module.exports = router;