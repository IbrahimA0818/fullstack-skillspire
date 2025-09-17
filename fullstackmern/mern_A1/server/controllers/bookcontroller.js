const Book = require("../models/book")

const GetAllBooks = ( async (request,response)=>{
    let books = await Book.find()

    response.send(books)
})
const GetBook = ( (request,response)=>{
    Book.findById(request.params.id)
        .then((book) =>{
            response.send(book)
        })
        .catch((err) => response.send(err))
})
const UpdateBook = ((request,response)=>{
    Book.findByIdAndUpdate(request.params.id, request.body, { new:true })
        .then((book)=>{
            console.log("The book was updated")

            response.send(book)
        })
        .catch((err) => response.send(err))
})
const DeleteBook = ((request,response)=>{
    Book.findByIdAndDelete(request.params.id)
        .then((book)=>{
            console.log("Book was deleted")

            response.send("The book was deleted.")
        })
        .catch((err) => response.send(err))
})

const AddBook = ((request,response)=>{
    let newBook = new Book( request.body )

    newBook.save()
        .then((book) => {
            console.log("The Book was saved successfully")
            response.send(book)
        })
        .catch( (err) => console.log(err) )
})

module.exports = {
    GetAllBooks,
    GetBook,
    UpdateBook,
    DeleteBook,
    AddBook}
