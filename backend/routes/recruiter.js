const express = require('express');
const router = express.Router();
const {getRecruiters, getRecruiter, createRecruiter, updateRecruiter, deleteRecruiter} = require('../controllers/recruiterController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getRecruiters);

router.post('/',getRecruiter);

router.post('/', createRecruiter);

router.put('/', updateRecruiter);

router.delete('/', deleteRecruiter);

module.exports = router;

