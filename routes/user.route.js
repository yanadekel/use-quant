const express = require('express');
const auth = require ('../middleware/auth')
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.post('/', (req, res) => {
  usersController.addUser(req, res);

}).post('/login', (req, res) => {
  usersController.userLogin(req, res);
}).post('/logout', auth, (req, res) => {
  usersController.userLogout(req, res);
}).post('/logoutAll', auth, (req, res) => {
  usersController.logoutAll(req, res);
})



module.exports = router;