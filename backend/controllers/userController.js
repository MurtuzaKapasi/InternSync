const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc Get all users
//@route GET /api/user
//@access Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json({message: 'Success',users});
});

//@desc Get user by ID
//@route GET /api/user/:id
//@access Private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({message: 'Success',user});
});

//@desc Login user
//@route POST /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({message: 'Please fill all fields'});
    }
    const user = await User.findOne({ email });

    //compare password with hashed password
    if(user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({ user : {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        } }, 
        process.env.JWT_SECRET, 
        { expiresIn: '30m' });
        console.log(token);
        res.status(200).json({message: 'Success',user, token});
    }else{
        res.status(401).json({message: 'Invalid email or password'});
    }
});
 

//@desc Register user
//@route POST /api/user
//@access Public
const createUser = asyncHandler(async (req, res) => {
    let userDetails = req.body;
    if(!userDetails.fullName || !userDetails.email || !userDetails.mobile || !userDetails.password || !userDetails.role){
        return res.status(400).json({message: 'Please fill all fields'});
    }

    const userAvailable = await User.findOne({ email : userDetails.email });
    if(userAvailable){
        return res.status(400).json({message: 'User already exists'});
    }
    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userDetails.password, salt);

    userDetails.password = hashedPassword;
    const user = await User.create({...userDetails});

    console.log(user);
    if(user){
        res.status(200).json({ message: 'Success',
            user
        });
    }else{
        res.status(400).json({ message: 'Invalid user data'});
    }
    
});

//@desc Update user
//@route PUT /api/user/
//@access Public
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        } 
    );
    res.status(200).json({message: 'Success',updatedUser});
});

//@desc Delete user
//@route DELETE /api/user/:id
//@access Public
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: 'Success',user});
});

module.exports = { getUsers, loginUser, getUser, createUser, updateUser, deleteUser };
