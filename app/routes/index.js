const express = require('express');
const router = express.Router();

const personRoute = require('./person');
const sportRouter = require('./sport');
const membershipRouter = require('./membership');
const personSport = require('./PersonSport');

router.use('/people', personRoute);
router.use('/sport', sportRouter);
router.use('/membership', membershipRouter);
router.use('/personSport', personSport);

module.exports = router;
