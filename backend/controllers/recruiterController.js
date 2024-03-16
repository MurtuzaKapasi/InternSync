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
    res.status(200).json({message: 'Success'});
});

//@desc Update recruiter
//@route PUT /api/recruiter/:id
//@access Private
const updateRecruiter = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete recruiter
//@route DELETE /api/recruiter/:id
//@access Private
const deleteRecruiter = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getRecruiters, getRecruiter, createRecruiter, updateRecruiter, deleteRecruiter };
