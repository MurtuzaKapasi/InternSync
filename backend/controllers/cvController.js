const User = require('../models/cv');

//@desc Get cv by ID
//@route GET /api/cv/:id
//@access Public
const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({message: 'Success',user});
};

//@desc upload cv
//@route POST /api/cv
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

//@desc Update cv
//@route PUT /api/cv/:id
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

//@desc Delete cv
//@route DELETE /api/cv/:id
//@access Public
const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(!user) {
        return res.status(404).json({message: 'User not found'});
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: 'Success',user});
};

module.exports = { getUser, createUser, updateUser, deleteUser };
