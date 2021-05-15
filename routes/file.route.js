const express = require('express');
const router = express.Router();
const multer = require('multer');
const csv = require('fast-csv');
const Matrix = require('../models/Matrix.model');
const fs = require('fs');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },

  filename: (req, file, cb) => {

    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage }).single('file');

router.post('/', upload, async (req, res) => {
  upload(req, res,  (err)=> {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    const heatmapFile = req.file;
    res.status(200).send(heatmapFile)

    const heatmapFilePath = (heatmapFile.path);

    let stream = fs.createReadStream(heatmapFilePath);
    let observations = [];
    let solutions = [];
    
    
    let csvStream = csv.parse()
    .on("data", (data) => {
      observations.push(data[0]);
      solutions.push(data[1]);
    })
    .on("end", (req, res) => {
      observations.shift();
      solutions.shift();
        const matrix = new Matrix({
          observations,
          solutions,
          filename: heatmapFile.filename         
        });
        matrix.save();
      })
      .on('done', (error) => {
        console.log(error)
      })

    stream.pipe(csvStream);
  });

})
.get('/', (req, res) => {
  projectsController.getAllFiles(req, res);

})


module.exports = router;