const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controllers/userController');
const { validateUserData } = require('../middlewares/validationMiddleware');

router.post('/users', validateUserData, createUser);
router.put('/users/:id', validateUserData, updateUser);

module.exports = router;
