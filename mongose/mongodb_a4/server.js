const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const require = require("./routers/router")
const app = express()

app.use( bodyParser.json() )

app.use('/', router)

let connectionString = "MONGO_URI=YOUR_MONGODB_URI_HERE"


mongoose.connect(connectionString)
.then(()=>{
    const port = 8080

    console.log("Connected to DB")

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`) 
    })
}).catch((error)=>{
    console.log(error)
})