const express = require('express');
const router = express.Router();
const {getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant} = require('../controllers/applicantController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/', createApplicant);
router.use(validateToken);
router.get('/', getApplicants);

router.post('/',getApplicant);


router.put('/', updateApplicant);

router.delete('/', deleteApplicant);

module.exports = router;


