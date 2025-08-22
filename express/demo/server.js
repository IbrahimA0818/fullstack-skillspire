const express = require("express")
const app = express()
const port = 8080

app.get('/', (request, response)=>{
    response.send("<h1>hello world express<h1/>")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})

