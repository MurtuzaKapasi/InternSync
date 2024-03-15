const express = require('express');
const router = express.Router();
const { getCV, createCV, updateCV, deleteCV} = require('../controllers/cvController');

router.get('/', getCVs);

router.get('/:id', getCV);

router.post('/', createCV);

router.put('/:id', updateCV);

router.delete('/:id', deleteCV);

module.exports = router;

