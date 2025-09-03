const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let recipes = [
  {
    "id": 1,
    "title": "pizza",
    "recipe": " dough, sauce, and mozzeralla"
  },
  {
    "id": 2,
    "title": "omeltte",
    "recipe": "crack the eggs into a mixing bowl with a pinch of sea salt and black pepper. Beat well with a fork. Heat a small knob of butter in a small frying pan on a low heat, and once melted and bubbling, add the eggs and move the pan around to spread them out evenly."
  }
];

app.get("/recipes", (request, response) => {
  response.send(recipes);
});

app.get("/recipes/:id", (request, response) => {
  const { id } = request.params;
  let recipe = recipes.find((t) => t.id == id);
  response.send(recipe);
});

app.post("/recipes", (request, response) => {
    const data = request.body
    recipes.push(data);
    response.send(data);
  });

app.put('/recipes/:id', (request, response)=>{
    const { id } = request.params
    let data = request.body

    let index = recipes.findIndex( (recipe) => recipe.id == id)

    recipes[index] = request.body
    response.send(recipes)
})

app.delete('/recipes/:id', (request, response)=> {
    const { id } = request.params

    recipes = recipes.filter((recipe)=> recipe.id != id )
    
    response.send(recipes)
})
  
const port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});