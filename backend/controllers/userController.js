const User = require('../models/user');
const bcrypt = require('bcrypt');

//@desc Get all users
//@route GET /api/users
//@access Public
const getUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json({message: 'Success'},users);
};

//@desc Get user by ID
//@route GET /api/user/:id
//@access Public
const getUser = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({message: 'Success',user});
};

//@desc Register user
//@route POST /api/user
//@access Public
const createUser = async (req, res) => {
    const {name, email, mobile, password, role} = req.body;

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({name, email, mobile, password : hashedPassword, role});

    console.log(user);
    res.status(200).json({message: 'Success',
        user    
    });
};

//@desc Update user
//@route PUT /api/user/:id
//@access Public
const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
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
};

//@desc Delete user
//@route DELETE /api/user/:id
//@access Public
const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: 'Success',user});
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
