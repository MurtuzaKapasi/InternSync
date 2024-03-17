const express = require('express');
const router = express.Router();
const {getRecruiters, getRecruiter, createRecruiter, updateRecruiter, deleteRecruiter} = require('../controllers/recruiterController');
const validateToken = require('../middleware/validateTokenHandler');
const cors = require('cors');
router.use(cors());

router.use(validateToken);
router.get('/', getRecruiters);

router.post('/:id',getRecruiter);

router.post('/', createRecruiter);

router.put('/', updateRecruiter);

router.delete('/', deleteRecruiter);

module.exports = router;


