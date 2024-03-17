const express = require('express');
const router = express.Router();
const {getUsers, getUser, loginUser, createUser, logoutUser,  updateUser, deleteUser} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');
const cors = require('cors');
router.use(cors());
router.post('/login', loginUser);

router.post('/', createUser);
router.use(validateToken);
router.get('/all', getUsers);


router.get('/',getUser);
router.post('/logout',logoutUser);


router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;

