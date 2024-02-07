const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');


router.get('/', personController.getAllPeople);


module.exports = router;
