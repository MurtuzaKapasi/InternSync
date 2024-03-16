const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');

//@desc Get all jobs
//@route GET /api/job
//@access Private
const getJobs = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Get job by ID
//@route GET /api/job/:id
//@access Private
const getJob = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Register job
//@route POST /api/job
//@access Private
const createJob = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Update job
//@route PUT /api/job/:id
//@access Private
const updateJob = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete job
//@route DELETE /api/job/:id
//@access Private
const deleteJob = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getJobs, getJob, createJob, updateJob, deleteJob };