const express = require('express');
const router = express.Router();
const { 
    getAllMembership,
    updateMembership,
    getMembershipById,
    postMembership,
    deleteMembership,
    isPersonMembership,
    getActiveMembers,
    getInactiveMembers
} = require("../controllers/membership");

router.get('/isMembership/:id', isPersonMembership);
router.get('/getActiveMembers', getActiveMembers);
router.get('/getInactiveMembers', getInactiveMembers);
router.get('/:id', getMembershipById);
router.put('/:id', updateMembership);
router.post('/', postMembership);
router.delete('/:id', deleteMembership);
router.get('/', getAllMembership);



module.exports = router;
