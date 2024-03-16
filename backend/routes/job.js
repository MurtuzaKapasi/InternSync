const express = require('express');
const router = express.Router();
const {getJobs, getJob, createJob, updateJob, deleteJob} = require('../controllers/jobController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/all', getJobs);

router.post('/',getJob);

router.post('/', createJob);

router.put('/', updateJob);

router.delete('/', deleteJob);

module.exports = router;



