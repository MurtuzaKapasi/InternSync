const express = require('express');
const router = express.Router();
const {getApplications, getApplication, createApplication, updateApplication, deleteApplication} = require('../controllers/applicationController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getApplications);

router.post('/:id',getApplication);

router.post('/', createApplication);

router.put('/:id', updateApplication);

router.delete('/:id', deleteApplication);

module.exports = router;



