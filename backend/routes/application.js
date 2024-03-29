const express = require('express');
const router = express.Router();
const {getApplications, getApplication, createApplication, updateApplication, deleteApplication} = require('../controllers/applicationController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getApplications);

router.post('/',getApplication);

router.post('/', createApplication);

router.put('/', updateApplication);

router.delete('/', deleteApplication);

module.exports = router;



