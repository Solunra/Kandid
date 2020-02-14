const express = require('express');

const cors = require('cors');

const post = require('./post');

const router = express.Router();

router.use('/api/post', post);

router.use(cors());

module.exports = router;