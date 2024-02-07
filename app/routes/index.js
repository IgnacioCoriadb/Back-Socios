const express = require('express');
const router = express.Router();

const personRoute = require('./person');

router.use('/people', personRoute);


module.exports = router;
