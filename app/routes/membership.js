const express = require('express');
const router = express.Router();
const { getAllMembership,updateMembership,getMembershipById,postMembership,deleteMembership} = require("../controllers/membership");

router.get('/', getAllMembership);
router.get('/:id', getMembershipById);
router.put('/:id', updateMembership);
router.post('/', postMembership);
router.delete('/:id', deleteMembership);


module.exports = router;
