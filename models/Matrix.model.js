const mongoose = require('mongoose');


const MatrixSchema = new mongoose.Schema({
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     trim: true,
    //     ref: 'User',
    // },
    filename:{
        type:String,
        // unique:true
    },
    observations: [],
    solutions: [],
    frequency: {
        type: Number,
        enum: [0,1,2,3],
        default:0
    },

});

const Matrix = mongoose.model('Matrix', MatrixSchema);


module.exports = Matrix;
