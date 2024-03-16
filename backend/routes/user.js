const express = require('express');
const router = express.Router();
const {getUsers, getUser, loginUser, createUser, updateUser, deleteUser} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.get('/', validateToken, getUsers);

router.post('/login', loginUser);

router.post('/:id', validateToken,getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;

