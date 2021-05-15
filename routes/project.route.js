const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth')
// const adminAuth = require('../middleware/adminAuth');
const projectsController = require('../controllers/projects.controller');
// const multer= require ('multer');

// const upload = multer({
//   dest:'/uploads',
//   limits: {
//     fileSize:1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(xlsx|csv)$/)){
//       return cb(new Error('please upload an excel document'))
//     }
//     cb(undefined,true)
//   }
// })


router.post('/', (req, res) => {
  projectsController.addProject(req, res);
})
  .get('/', (req, res) => {
    projectsController.getAllProjects(req, res);

  }).get('/active', (req, res) => {
    projectsController.getAllActive(req, res);

  }).get('/project/:id', (req, res) => {
    projectsController.getProject(req, res);

  }).get('/costumer/:id', async (req, res) => {
    res.send(req.user);
    //login to costumer project
  })

  .put('/update/:Id', (req, res) => {
    projectsController.updateProject(req, res);
  })
  
  // .post('/project/file',upload.single('heatmap'),(req,res) =>{
  //   // projectsController.fileUpload(req, res);
  //   res.send()
  // }, (error, req,res, next)=> {
  //   res.status(400).send({error:error.message});
  // })

  .delete('/:id',  (req, res) => {
    projectsController.deleteProject(req, res);
  })

  module.exports = router;