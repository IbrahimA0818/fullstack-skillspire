const mongoose = require('mongoose')
const Schema = mongoose.Schema
const songSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    artist:{
        type:String,
        required: true
    },
    duration:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
})
const playlistSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    songs:{
        type:[songSchema],
        default:[]
    },
    creator:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("playlist", playlistSchema)