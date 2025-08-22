const express = require("express")
const app = express()
const port = 8080
app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.send("<h1>INDEX<h1/>")
})
app.get('/display-name', (request, response)=>{
    response.send("<h1>Ibrahim ajebna<h1/>")
})
app.get('/display-food', (request, response)=>{
    let pizza = "<img src='/pizza.webp'>"
    response.send("<h1>pizza<h1/> <br/>" + pizza)
})
app.get('/display-vacation', (request, response)=>{
    let japan = "<img src='/japan.jpg'>"
    response.send("<h1>japan<h1/> <br/>" + japan)
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})
