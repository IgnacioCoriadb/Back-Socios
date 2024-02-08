const express = require('express');
const router = express.Router();
const { getAllPersonSport,updatePersonSport,getPersonSportById,postPersonSport,deletePersonSport} =  require('../controllers/personSportController');

router.get('/', getAllPersonSport);
router.get('/:id', getPersonSportById);
router.post('/', postPersonSport);
router.put('/:id', updatePersonSport);
router.delete('/:id', deletePersonSport);

module.exports = router;
