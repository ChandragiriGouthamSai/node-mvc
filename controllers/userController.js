// controllers/userController.js
const UserModel = require('../models/userModel');

function getUsers(req, res) {
  const users = UserModel.getAllUsers();
  res.json(users);
}

function getUser(req, res) {
  const id = parseInt(req.params.id);
  const user = UserModel.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

module.exports = { getUsers, getUser };
