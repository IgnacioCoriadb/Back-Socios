const express = require('express');
const router = express.Router();

const personRoute = require('./person');
const sportRouter = require('./sport');

router.use('/people', personRoute);
router.use('/sport', sportRouter);


module.exports = router;
