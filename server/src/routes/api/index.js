'use strict'
const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const userRouter = require('./user');

router.get('/status', (req, res) => { res.send({status: 'OK'}) });
router.use('/user', userRouter);
router.use('/auth', authRouter); // mount auth paths

module.exports = router
