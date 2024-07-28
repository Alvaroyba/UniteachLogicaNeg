const express = require('express');
const { getUsers, getUser, createUserController, updateUser, deleteUserController } = require('../controllers/users');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUserController);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUserController);

module.exports = router;
