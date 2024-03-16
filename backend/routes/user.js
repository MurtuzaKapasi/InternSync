const express = require('express');
const router = express.Router();
const {getUsers, getUser, loginUser, createUser, updateUser, deleteUser} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getUsers);

router.post('/login', loginUser);

router.post('/:id',getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;

