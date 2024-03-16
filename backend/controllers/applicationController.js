const asyncHandler = require('express-async-handler');
const Application = require('../models/applicationModel');

//@desc Get all applications
//@route GET /api/application
//@access Private
const getApplications = asyncHandler(async (req, res) => {
    if(req.user.role === 'recruiter') {
           const {jobId} = req.body;
        let applications = await Application.find({jobId});
        res.status(200).json({message: 'Success', applications});
    }
    let applications = await Application.find({applicantId : req.user.id});
    res.status(200).json({message: 'Success', applications});
});

//@desc Get application by ID
//@route GET /api/application/
//@access Private
const getApplication = asyncHandler(async (req, res) => {
    const {applicationId} = req.body;
    const application = await Application.findById(applicationId);
    if(application) {
        res.status(200).json({message: 'Success', application});
    } else {
        res.status(404);
        throw new Error('Application not found');
    }
});

//@desc Register application
//@route POST /api/application
//@access Private
const createApplication = asyncHandler(async (req, res) => {
    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }
    const applicationDetails = req.body;
    const application = await Application.create({...applicationDetails, applicantId: req.user.id});
    res.status(201).json({message: 'Success', application});
});

//@desc Update application
//@route PUT /api/application/
//@access Private
const updateApplication = asyncHandler(async (req, res) => {
    const {applicationId, applicationDetails} = req.body;
    const application = await Application.findById(applicationId);
    if(application) {
        application.status = applicationDetails.status || application.status;
        application.feedback = applicationDetails.feedback || application.feedback;
        application.save();
        res.status(200).json({message: 'Success', application});
    } else {
        res.status(404);
        throw new Error('Application not found');
    }
});

//@desc Delete application
//@route DELETE /api/application/
//@access Private
const deleteApplication = asyncHandler(async (req, res) => {
    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }
    const {applicationId} = req.body;
    const application = await Application.findById(applicationId);
    if(application) {
        await application.remove();
        res.status(200).json({message: 'Success', application});
    } else {
        res.status(404);
        throw new Error('Application not found');
    }
});

module.exports = { getApplications, getApplication, createApplication, updateApplication, deleteApplication };
