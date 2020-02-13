const express = require('express');

const post = require('./post');
const comment = require('./comment');

const router = express.Router();

router.use('/api/post', post);
router.use('/api/login', comment);

module.exports = router;