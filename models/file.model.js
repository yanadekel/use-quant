const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const fileSchema= new Schema (
{
  filePath:String,
}
)


const File= mongoose.model('File', fileSchema);
module.exports= File;