const asyncHandler = require('express-async-handler');
const Application = require('../models/applicationModel');

//@desc Get all applications
//@route GET /api/application
//@access Private
const getApplications = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Get application by ID
//@route GET /api/application/:id
//@access Private
const getApplication = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Register application
//@route POST /api/application
//@access Private
const createApplication = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Update application
//@route PUT /api/application/:id
//@access Private
const updateApplication = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete application
//@route DELETE /api/application/:id
//@access Private
const deleteApplication = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getApplications, getApplication, createApplication, updateApplication, deleteApplication };
