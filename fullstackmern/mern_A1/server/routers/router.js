const express = require ("express")
const router = express.Router()
const Book = require("../models/book")

const {
    GetAllBooks,
    GetBook,
    UpdateBook,
    DeleteBook,
    AddBook
} = require("../controllers/bookcontroller")

router.get("/books", GetAllBooks),
router.get("/books/:id", GetBook),
router.put("/books/:id", UpdateBook),
router.delete("/books/:id", DeleteBook),
router.post("/books",AddBook)

module.exports = router