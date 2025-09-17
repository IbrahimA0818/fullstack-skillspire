const mongoose = require("mongoose")
const { type } = require("os")
const Schema = mongoose.Schema

const AppointmentSchema = new Schema ({
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    complaint:{
        type:stringify,
        required:true
    }

})

module.exports = mongoose.model("Appointment", AppointmentSchema)