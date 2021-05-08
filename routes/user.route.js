const express = require('express');
const userRouter = express.Router();
const auth = require ('../middleware/auth')
const adminAuth = require('../middleware/adminAuth');
const usersController = require('../controllers/users.controller');

userRouter.post('/', (req, res) => {
  usersController.addUser(req, res);

}).post('/login', (req, res) => {
  usersController.userLogin(req, res);
}).post('/logout', auth, (req, res) => {
  usersController.userLogout(req, res);
}).post('/logoutAll', auth, (req, res) => {
  usersController.logoutAll(req, res);
}).put('/', auth, adminAuth,(req, res) => {
  userController.updateUser(req, res);
});



module.exports = userRouter;