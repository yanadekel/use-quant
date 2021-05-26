const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const projectsController = require('../controllers/projects.controller');



router.post('/',auth,  (req, res) => {
  projectsController.addProject(req, res);
})
  .get('/',auth, (req, res) => {
    projectsController.getAllProjects(req, res);

  }).get('/active', (req, res) => {
    projectsController.getAllActive(req, res);

  }).get('/project/:id', (req, res) => {
    projectsController.getProject(req, res);

  }).get('/costumer/:id', async (req, res) => {
    res.send(req.user);
    //login to costumer project
  })

  .put('/update/:Id',auth, (req, res) => {
    projectsController.updateProject(req, res);
  })
  

  .delete('/:id',  (req, res) => {
    projectsController.deleteProject(req, res);
  })

  module.exports = router;