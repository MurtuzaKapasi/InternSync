const express = require('express');
const router = express.Router();
const {getRecruiters, getRecruiter, createRecruiter, updateRecruiter, deleteRecruiter} = require('../controllers/recruiterController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getRecruiters);

router.post('/:id',getRecruiter);

router.post('/', createRecruiter);

router.put('/:id', updateRecruiter);

router.delete('/:id', deleteRecruiter);

module.exports = router;


