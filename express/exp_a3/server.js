const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let books = [
  {
    "id": 1,
    "title": "moby dick",
    "author": "Herman Melville"
  },
  {
    "id": 2,
    "title": "The hunger games",
    "author": "Suzanne Collins"
  }
];

app.get("/books", (request, response) => {
  response.send(books);
});

app.get("/books/:id", (request, response) => {
  const { id } = request.params;
  let book = books.find((t) => t.id == id);
  response.send(book);
});

app.post("/books", (request, response) => {
    const data = request.body
    books.push(data);
    response.send(data);
  });

app.put('/books/:id', (request, response)=>{
    const { id } = request.params
    let data = request.body

    let index = books.findIndex( (book) => book.id == id)

    books[index] = request.body
    response.send(books)
})

app.delete('/books/:id', (request, response)=> {
    const { id } = request.params

    books = books.filter((book)=> book.id != id )
    
    response.send(books)
})
  
const port = 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});