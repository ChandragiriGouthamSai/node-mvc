// models/userModel.js
const users = [
    { id: 1, name: 'Goutham Sai' },
    { id: 2, name: 'John Doe' }
  ];
  
  function getAllUsers() {
    return users;
  }
  
  function getUserById(id) {
    return users.find(user => user.id === id);
  }
  
  module.exports = { getAllUsers, getUserById };
  