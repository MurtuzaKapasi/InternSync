const asyncHandler = require('express-async-handler');
const Job = require('../models/jobModel');

//@desc Get all jobs
//@route GET /api/job
//@access Private
const getJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find({});
    res.status(200).json({message: 'Success', jobs});
});

//@desc Get job by ID
//@route GET /api/job/
//@access Private
const getJob = asyncHandler(async (req, res) => {
    const {jobId} = req.body;
    const job = await Job.findById(jobId);
    if(job) {
        res.status(200).json({message: 'Success', job});
    } else {
        res.status(404);
        throw new Error('Job not found');
    }
});

//@desc Register job
//@route POST /api/job
//@access Private
const createJob = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as recruiter');
    }
    const jobDescription = req.body;
    const job = await Job.create({...jobDescription, recruiterId: req.user.id});
    res.status(201).json({message: 'Success', job});
});

//@desc Update job
//@route PUT /api/job/
//@access Private
const updateJob = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as recruiter');
    }
    const jobDescription = req.body;

    const job = await Job.findById(jobDescription.jobId);
    if(job) {
        job.title = jobDescription.title || job.title;
        job.description = jobDescription.description || job.description;
        job.skills = jobDescription.skills || job.skills;
        job.type = jobDescription.type || job.type;
        job.experience = jobDescription.experience || job.experience;
        job.location = jobDescription.location || job.location;
        job.salary = jobDescription.salary || job.salary;
        await job.save();
        res.status(200).json({message: 'Success', job});
    } else {
        res.status(404);
        throw new Error('Job not found');
    }
});

//@desc Delete job
//@route DELETE /api/job/
//@access Private
const deleteJob = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as recruiter');
    }
    const {jobId} = req.body;
    const job = await Job.findById(jobId);
    if(job) {
        await job.deleteOne();
        res.status(200).json({message: 'Success', job});
    } else {
        res.status(404);
        throw new Error('Job not found');
    }
});

module.exports = { getJobs, getJob, createJob, updateJob, deleteJob };