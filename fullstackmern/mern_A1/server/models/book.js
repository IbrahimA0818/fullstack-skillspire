const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    pages:{
        type: Number,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Book", bookSchema)