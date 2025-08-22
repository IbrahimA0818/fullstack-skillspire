const express = require("express")
const app = express()
const port = 8080

app.get('/', (request, response)=>{
    response.send("<h1>ibrahim<h1/> <br/> <h1>Ajebna<h1/> <br/> <h1>pizza<h1/> <br/> <h1>japan<h1/>")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})

