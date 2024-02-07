const express = require('express');
const router = express.Router();
const {postSport,getSportById,getAllSport,updateSport} = require("../controllers/sportController");

router.get('/', getAllSport);
router.get('/:id', getSportById);
router.put('/:id', updateSport);
router.post('/', postSport);


module.exports = router;
