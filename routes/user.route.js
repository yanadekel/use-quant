const express = require('express');
const router = express.Router();
const auth = require ('../middleware/auth')
const adminAuth = require('../middleware/adminAuth');
const usersController = require('../controllers/users.controller');

router.post('/', (req, res) => {
  usersController.addUser(req, res);

}).post('/login', (req, res) => {
  usersController.userLogin(req, res);

}).post('/logout', auth, (req, res) => {
  usersController.userLogout(req, res);

}).post('/logoutAll', auth, (req, res) => {
  usersController.logoutAll(req, res);

}).put('/me', auth, (req, res) => {
  usersController.updateUser(req, res);

}).get('/me', auth, async (req, res) => {
  res.send(req.user);

}).delete('/me',auth, async (req, res) => {
  userController.deleteUser(req, res);
})



module.exports = router;