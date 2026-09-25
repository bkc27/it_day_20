const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    roll: {
        type: Number,
        required:true
    },
    name: {
        type:String,
        required:true,
        trim:true
    },
    course:{
        type:String,
        default: "B.Tech-IT"
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Student",studentSchema);