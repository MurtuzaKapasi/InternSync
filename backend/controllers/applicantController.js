const asyncHandler = require('express-async-handler');
const Applicant = require('../models/applicantModel');

//@desc Get all applicants
//@route GET /api/applicant
//@access Private
const getApplicants = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Get applicant by ID
//@route GET /api/applicant/:id
//@access Private
const getApplicant = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Register applicant
//@route POST /api/applicant
//@access Private
const createApplicant = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Update applicant
//@route PUT /api/applicant/:id
//@access Private
const updateApplicant = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete applicant
//@route DELETE /api/applicant/:id
//@access Private
const deleteApplicant = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant };
