const express = require('express');
const projectRouter = express.Router();
// const auth = require('../middleware/auth')
// const adminAuth = require('../middleware/adminAuth');
const projectsController = require('../controllers/users.controller');



projectRouter.post('/projects', (req, res) => {
  projectsController.addProject(req, res);
})
  .get('/projects', (req, res) => {
    projectsController.getAllProjects(req, res);

  }).get('/projects/active', (req, res) => {
    projectsController.getAllActive(req, res);

  }).get('/projects/project/:id', (req, res) => {
    projectsController.getProject(req, res);

  }).get('/projects/costumer/:id', async (req, res) => {
    res.send(req.user);
    //login to costumer project
  })

  .put('/projects/update/:Id', (req, res) => {
    projectsController.updateProject(req, res);
  })

  .delete('/projects/:id',  (req, res) => {
    projectsControlle.deleteProject(req, res);
  })

  module.exports = projectRouter;