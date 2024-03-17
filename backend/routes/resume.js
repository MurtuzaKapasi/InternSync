const express = require('express');
const router = express.Router();
const {getResumes, getResume, createResume, updateResume, deleteResume} = require('../controllers/resumeController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getResumes);

router.post('/:id',getResume);

// only this is required for now
router.post('/', createResume);

router.put('/:id', updateResume);

router.delete('/:id', deleteResume);

module.exports = router;



