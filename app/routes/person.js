const express = require('express');
const router = express.Router();
const {getAllPeople,getPersonById,postPerson,updatePerson,deletePerson} =  require('../controllers/personController');

router.get('/', getAllPeople);
router.get('/:id', getPersonById);
router.post('/', postPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;
