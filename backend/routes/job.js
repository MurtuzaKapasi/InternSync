const express = require('express');
const router = express.Router();
const {getJobs, getJob, createJob, updateJob, deleteJob} = require('../controllers/jobController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getJobs);

router.post('/:id',getJob);

router.post('/', createJob);

router.put('/:id', updateJob);

router.delete('/:id', deleteJob);

module.exports = router;



