const express = require('express');
const router = express.Router();
const {getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant} = require('../controllers/applicantController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getApplicants);

router.post('/:id',getApplicant);

router.post('/', createApplicant);

router.put('/:id', updateApplicant);

router.delete('/:id', deleteApplicant);

module.exports = router;


