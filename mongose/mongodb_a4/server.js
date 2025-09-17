const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const require = require("./routers/router")
const app = express()

app.use( bodyParser.json() )

app.use('/', router)

let connectionString = "mongodb+srv://ibrahima0818:Nimco6921@cluster0.w9bbjbw.mongodb.net/myplaylistsDB?retryWrites=true&w=majority&appName=Cluster0"


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