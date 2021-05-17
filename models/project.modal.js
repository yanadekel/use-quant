const mongoose = require('mongoose');
const validator = require("validator");


const ProjectSchema =  mongoose.Schema({
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Matrix',
  // },

  costumerName: {
    type: String,
    trim: true,
    require: true,
    lowercase: true,
    ltrim: true,
    rtrim: true,
    minLength:1
  },

  projectName: {
    type: String,
    ltrim: true,
    rtrim: true,
    require: true,
    lowercase: true,
    minLength:1,
    unique: true,
  },

  fileName: {
   type:String,
   unique:true,
   required: true,
  },

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },

  date: {
    type: Date,
    required: false,
    unique: false,
    default: Date.now()
  },


})

const Project = mongoose.model('projects', ProjectSchema);
module.exports = Project;