// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);

module.exports = router;
