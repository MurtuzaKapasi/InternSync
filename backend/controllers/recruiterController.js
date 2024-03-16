const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Recruiter = require('../models/recruiterModel');

//@desc Get all recruiters
//@route GET /api/recruiter
//@access Private
const getRecruiters = asyncHandler(async (req, res) => {
    const recruiters = await Recruiter.find({});
    res.status(200).json({ message : "Success", recruiters});
});

//@desc Get recruiter by ID
//@route GET /api/recruiter
//@access Private
const getRecruiter = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as a recruiter');
    }
    const userId = req.user.id;
    const user = await User.findOne({ _id : userId}).select('-password');
    const Recuiter = await Recruiter.findOne({userId});
    res.status(200).json({ message : "Success", user, Recuiter});
});

//@desc Register recruiter
//@route POST /api/recruiter
//@access Private
const createRecruiter = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as a recruiter');
    }
    const userId = req.user.id;
    const user = await User.findOne({ _id : userId}).select('-password');
    const { company, jobTitle, department, bio } = req.body;
    const recruiter = await Recruiter.create({userId, company, jobTitle, department, bio});
    if(recruiter) {
        res.status(201).json({message: 'Success', user, recruiter});
    } else {
        res.status(400);
        throw new Error('Invalid recruiter data');
    }
});

//@desc Update recruiter
//@route PUT /api/recruiter/
//@access Private
const updateRecruiter = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as a recruiter');
    }
    const userId = req.user.id;
    const recruiter = await Recruiter.findOne({userId});
    if(recruiter) {
        recruiter.company = req.body.company || recruiter.company;
        recruiter.jobTitle = req.body.jobTitle || recruiter.jobTitle;
        recruiter.department = req.body.department || recruiter.department;
        recruiter.bio = req.body.bio || recruiter.bio;
        const updatedRecruiter = await recruiter.save();
        res.status(200).json({message: 'Success', recruiter: updatedRecruiter});
    } else {
        res.status(404);
        throw new Error('Recruiter not found');
    }
    res.status(200).json({message: 'Success'});
});

//@desc Delete recruiter
//@route DELETE /api/recruiter/
//@access Private
const deleteRecruiter = asyncHandler(async (req, res) => {
    if(req.user.role !== 'recruiter') {
        res.status(401);
        throw new Error('Not authorized as a recruiter');
    }
    const userId = req.user.id;
    const recruiter = await Recruiter.findOne({userId});
    if(recruiter) {
        await recruiter.deleteOne();
        res.status(200).json({message: 'Success'});
    } else {
        res.status(404);
        throw new Error('Recruiter not found');
    }
});

module.exports = { getRecruiters, getRecruiter, createRecruiter, updateRecruiter, deleteRecruiter };
