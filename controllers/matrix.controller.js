const Matrix = require ('../models/Matrix.model');


const getAllMatrixs = async (req, res) => {
  try {
    const matrixes = await Matrix.find({})
    return res.send(matrixes)

  } catch (e) {
    res.status(500).send("no matrixes")
  }
}



const getMatrix = async (req, res) => {
  const {filename} = req.params;
  console.log(filename);
  try {
    const matrix = await Matrix.find({filename});
    if (!matrix) {
      return res.status(404).send("Wrong file-name");
    }
    return res.status(200).send(matrix)

  } catch (e) {
    return res.status(500).send("no matrix")
  }

}


const getMatrixById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const matrix = await Matrix.findById(id);
    if (!matrix) {
      return res.status(404).send("Wrong Id");
    }
    return res.status(200).send(matrix)

  } catch (e) {
    return res.status(500).send("no matrix")
  }

}

const deleteMatrix = async (req, res) => {
  const {id} = req.params;
  try {
    const matrix = await Matrix.find({id});
    if (!matrix) {
      console.log('no matrix')
      return res.status(404).send();
    }
const matrixDelet = await Matrix.findOneAndDelete(id);
    res.send(matrixDelet)
  } catch (err) {
    console.log(' why no matrix')
    res.status(500).send(err);
  }
}








module.exports = {
  getAllfiles:getAllMatrixs,
  getFileByFileName:getMatrix,
  getMatrix:getMatrixById,
  deleteFile:deleteMatrix
}