const asyncHandler = require('express-async-handler');
const Resume = require('../models/resumeModel');

//@desc Get all resumes
//@route GET /api/resume
//@access Private
const getResumes = asyncHandler(async (req, res) => {
    
});

//@desc Get resume by ID
//@route GET /api/resume/:id
//@access Private
const getResume = asyncHandler(async (req, res) => {
    const resume = await Resume.findOne({ _id: req.params.id, applicantId: req.user.id });
    if (!resume) {
        res.status(404).json({ success: false, message: 'Resume not found' });
        return;
    }
    res.set('Content-Type', resume.file.contentType);
    res.send(resume.file.data);
});

//@desc Register resume
//@route POST /api/resume
//@access Private
const createResume = asyncHandler(async (req, res) => {
    const { buffer, contentType } = req.file; // Assuming the file is uploaded using multer or similar middleware
    const resume = new Resume({
        applicantId: req.user.id,
        file: {
            data: buffer,
            contentType: contentType
        }
    });
    await resume.save();
    res.status(201).json({ success: true, data: resume });
});


//@desc Update resume
//@route PUT /api/resume/:id
//@access Private
const updateResume = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete resume
//@route DELETE /api/resume/:id
//@access Private
const deleteResume = asyncHandler(async (req, res) => {
    const resume = await Resume.findOneAndDelete({ _id: req.params.id, applicantId: req.user.id });
    if (!resume) {
        res.status(404).json({ success: false, message: 'Resume not found' });
        return;
    }
    res.status(200).json({ success: true, message: 'Resume deleted successfully' });
});

module.exports = { getResumes, getResume, createResume, updateResume, deleteResume };
