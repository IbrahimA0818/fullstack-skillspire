const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const recipe = require('./recipes')

app.use( bodyParser.json() )

app.get("/recipes", async (request,response)=>{
    let recipes = await recipe.find()

    response.send(recipes)
})

app.get("/recipes/:id", (request,response)=>{
    recipe.findById(request.params.id)
        .then((recipe) =>{
            response.send(recipe)
        })
        .catch((err) => response.send(err))
})

app.put("/recipes/:id",(request,response)=>{
    recipe.findByIdAndUpdate(request.params.id, request.body, { new:true })
        .then((recipe)=>{
            console.log("The recipe was updated")

            response.send(recipe)
        })
        .catch((err) => response.send(err))
})

app.delete("/recipes/:id",(request,response)=>{
    recipe.findByIdAndDelete(request.params.id)
        .then((recipe)=>{
            console.log("recipe was deleted")

            response.send("The recipe was deleted.")
        })
        .catch((err) => response.send(err))
})

app.post("/recipes", (request,response)=>{
    let newrecipe = new recipe( request.body )

    newrecipe.save()
        .then((recipe) => {
            console.log("The recipe was saved successfully")
            response.send(recipe)
        })
        .catch( (err) => console.log(err) )
})

let connectionString = "mongodb+srv://ibrahima0818:Nimco6921@cluster0.w9bbjbw.mongodb.net/myrecipesDB?retryWrites=true&w=majority&appName=Cluster0"


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