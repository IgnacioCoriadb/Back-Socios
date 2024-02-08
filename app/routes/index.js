const express = require('express');
const router = express.Router();

const personRoute = require('./person');
const sportRouter = require('./sport');
const membershipRouter = require('./membership');

router.use('/people', personRoute);
router.use('/sport', sportRouter);
router.use('/membership', membershipRouter);


module.exports = router;
