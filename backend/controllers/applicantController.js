const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Applicant = require('../models/applicantModel');

//@desc Get all applicants
//@route GET /api/applicant
//@access Private
const getApplicants = asyncHandler(async (req, res) => {
    const applicants = await Applicant.find({});
    res.status(200).json({message: 'Success', applicants});
});

//@desc Get applicant by ID
//@route GET /api/applicant/
//@access Private
const getApplicant = asyncHandler(async (req, res) => {
    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }

    const userId = req.user.id;
    const user = await User.findOne({ _id : userId}).select('-password');
    const applicant = await Applicant.findOne({userId});
    if(applicant) {
        res.status(200).json({message: 'Success', user, applicant});
    } else {
        res.status(404);
        throw new Error('Applicant not found');
    }
});

//@desc Register applicant
//@route POST /api/applicant
//@access public
const createApplicant = asyncHandler(async (req, res) => {

    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }
    const userId = req.user.id;
    const applicantDetails = req.body;
    const applicant = await Applicant.create({userId, ...applicantDetails});
    if(applicant) {
        res.status(201).json({message: 'Success', applicant});
    } else {
        res.status(400);
        throw new Error('Invalid applicant data');
    }
});

//@desc Update applicant
//@route PUT /api/applicant/
//@access Private
const updateApplicant = asyncHandler(async (req, res) => {
    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }

    const userId = req.user.id;
    const applicant = await Applicant.findOne({userId});
    if(applicant) {
        const applicantDetails = req.body;
        const updatedApplicant = await Applicant.findOneAndUpdate({userId}, {...applicantDetails}, {new: true});
        res.status(200).json({message: 'Success', updatedApplicant});
    } else {
        res.status(404);
        throw new Error('Applicant not found');
    }
});

//@desc Delete applicant
//@route DELETE /api/applicant/
//@access Private
const deleteApplicant = asyncHandler(async (req, res) => {
    if(req.user.role !== 'applicant') {
        res.status(401);
        throw new Error('Not authorized as a applicant');
    }

    const userId = req.user.id;
    const applicant = await Applicant.findOne({userId});
    if(applicant) {
        await applicant.deleteOne();
        res.status(200).json({message: 'Success',applicant});
    } else {
        res.status(404);
        throw new Error('Applicant not found');
    }
});

module.exports = { getApplicants, getApplicant, createApplicant, updateApplicant, deleteApplicant };
