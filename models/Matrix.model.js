const mongoose = require('mongoose');


const MatrixSchema = new mongoose.Schema({

    filename:{
        type:String,
        unique:true,
        required: true,
    },
    observations: [],
    solutions: [],
    frequency: {
        type: Number,
        enum: [0,1,2,3],
        default:0
    },

});

// MatrixSchema.virtual('projects', {
//     ref: 'Project',
//     localField: '_id',
//     foreignField: 'owner',
// })

const Matrix = mongoose.model('Matrix', MatrixSchema);


module.exports = Matrix;
