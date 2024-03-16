const express = require('express');
const router = express.Router();
const {getAvatars, getAvatar, createAvatar, updateAvatar, deleteAvatar} = require('../controllers/avatarController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getAvatars);

router.post('/:id',getAvatar);

router.post('/', createAvatar);

router.put('/:id', updateAvatar);

router.delete('/:id', deleteAvatar);

module.exports = router;



