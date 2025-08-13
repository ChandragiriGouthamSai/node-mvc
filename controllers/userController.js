// controllers/userController.js
const UserModel = require('../models/userModel');

async function getUsers(req, res) {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error' });
  }
}

async function getUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await UserModel.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error' });
  }
}

module.exports = { getUsers, getUser };
