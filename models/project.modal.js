const mongoose = require('mongoose');
const validator = require("validator");


const ProjectSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: 'User',
  },

  costumerName: {
    type: String,
    trim: true,
  },

  projectName: {
    type: String,
    ltrim: true,
    rtrim: true,
    require: true,
    lowercase: true,
    minLength: 4,

  },

  tableFile: {
    type:Buffer,
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