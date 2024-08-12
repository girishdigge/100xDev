const express = require('express');
const router = express.Router();
const { signIn, signUp, updateUser } = require('../controller/userController');
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/updateUser', updateUser);

module.exports = router;
