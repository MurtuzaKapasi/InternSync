const express = require('express');
const router = express.Router();
const {getFeedbacks, getFeedback, createFeedback, updateFeedback, deleteFeedback} = require('../controllers/feedbackController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getFeedbacks);

router.post('/:id',getFeedback);

router.post('/', createFeedback);

router.put('/:id', updateFeedback);

router.delete('/:id', deleteFeedback);

module.exports = router;



