const express = require('express');
const postControllers = require('../Controllers/postControllers');


const router = express.Router();

router.get('/posts', postControllers.post__get)
router.post('/posts', postControllers.set__posts)

module.exports = router;