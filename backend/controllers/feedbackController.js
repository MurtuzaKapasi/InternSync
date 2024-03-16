const asyncHandler = require('express-async-handler');
const Feedback = require('../models/feedbackModel');

//@desc Get all feedbacks
//@route GET /api/feedback
//@access Private
const getFeedbacks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Get feedback by ID
//@route GET /api/feedback/:id
//@access Private
const getFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Register feedback
//@route POST /api/feedback
//@access Private
const createFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Update feedback
//@route PUT /api/feedback/:id
//@access Private
const updateFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete feedback
//@route DELETE /api/feedback/:id
//@access Private
const deleteFeedback = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getFeedbacks, getFeedback, createFeedback, updateFeedback, deleteFeedback };
