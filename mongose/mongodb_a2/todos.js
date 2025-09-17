const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    Completion:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("todo", todoSchema)