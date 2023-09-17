const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    createdByDoctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status:{
        type: String,
        require: true,
        enum:['Negative','Travalled-Quaantine','Symotoms-Quarantine','Positive-Admit']

    },
    date:{
        type: Date,
        required: true,
    }
},{
    timestamps: true
})
const Report = mongoose.model('Report',reportSchema);
module.exports= Report;