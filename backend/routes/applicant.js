const express = require('express');
const router = express.Router();
const {getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant} = require('../controllers/applicantController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getApplicants);

router.post('/',getApplicant);

router.post('/', createApplicant);

router.put('/', updateApplicant);

router.delete('/', deleteApplicant);

module.exports = router;


