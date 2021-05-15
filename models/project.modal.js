const mongoose = require('mongoose');
const validator = require("validator");


const ProjectSchema =  mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    trim: true,
    ref: 'User',
  },

  costumerName: {
    type: String,
    trim: true,
    require: true,
    lowercase: true,
    ltrim: true,
    rtrim: true,
  },

  projectName: {
    type: String,
    ltrim: true,
    rtrim: true,
    require: true,
    lowercase: true,
    // unique: true,
  },

  fileName: {
   type:String,
   
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