const mongoose = require('mongoose');

const heatmapSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: 'User',
},
    observations: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        enum: ['ob1', 'ob2', 'ob3'],
    },
    solutions: {
        type: String,
        trim: true,
        lowercase: true,
        enum: ['sul1','sul2','sul3'],
    },
    frequency: {
        type: String,
        required: true,
        enum: ['s','m','l']
    },
 
});

const Heatmap = mongoose.model('heatmap', heatmapSchema);

module.exports = Heatmap;