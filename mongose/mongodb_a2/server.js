const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const todo = require('./todos')

app.use( bodyParser.json() )

app.get("/todos", async (request,response)=>{
    let todos = await todo.find()

    response.send(todos)
})

app.get("/todos/:id", (request,response)=>{
    todo.findById(request.params.id)
        .then((todo) =>{
            response.send(todo)
        })
        .catch((err) => response.send(err))
})

app.put("/todos/:id",(request,response)=>{
    todo.findByIdAndUpdate(request.params.id, request.body, { new:true })
        .then((todo)=>{
            console.log("The todo was updated")

            response.send(todo)
        })
        .catch((err) => response.send(err))
})

app.delete("/todos/:id",(request,response)=>{
    todo.findByIdAndDelete(request.params.id)
        .then((todo)=>{
            console.log("todo was deleted")

            response.send("The todo was deleted.")
        })
        .catch((err) => response.send(err))
})

app.post("/todos", (request,response)=>{
    let newtodo = new todo( request.body )

    newtodo.save()
        .then((todo) => {
            console.log("The todo was saved successfully")
            response.send(todo)
        })
        .catch( (err) => console.log(err) )
})
m
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