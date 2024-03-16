const asyncHandler = require('express-async-handler');
const Avatar = require('../models/avatarModel');

//@desc Get all avatars
//@route GET /api/avatar
//@access Private
const getAvatars = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Get avatar by ID
//@route GET /api/avatar/:id
//@access Private
const getAvatar = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Register avatar
//@route POST /api/avatar
//@access Private
const createAvatar = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Update avatar
//@route PUT /api/avatar/:id
//@access Private
const updateAvatar = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

//@desc Delete avatar
//@route DELETE /api/avatar/:id
//@access Private
const deleteAvatar = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Success'});
});

module.exports = { getAvatars, getAvatar, createAvatar, updateAvatar, deleteAvatar };
