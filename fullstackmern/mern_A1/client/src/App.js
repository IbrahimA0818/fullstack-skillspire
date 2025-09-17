import { useState, useEffect } from 'react';
import './App.css';
import { getAllBooks, addBook, deleteBook, updateBook } from './api/api';

function App() {
  const [books, setBooks] = useState([])
  const [searchId, setSearchId] = useState("")
  const[nextId, setNextId] = useState(1)

  useEffect(()=>{
    const fetchBooks = async () =>{
      const response = await getAllBooks()

      let loadedBooks = response.data.map((book, index)=>({
        ...book,
        id: book.id, 
        index: index + 1
      }))

      setBooks(loadedBooks)
    
      const maxId = loadedBooks.length > 0 ? Math.max(...loadedBooks.map(b => b.id)) : 0
      setNextId(maxId + 1)
    }
    fetchBooks()
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault()

    let title = e.target['title'].value
    let description = e.target['description'].value
    let author = e.target['author'].value

    const newBook = {id: nextId, title, description, author}
    const response = await addBook(newBook)

    setBooks([...books, response.data])
    setNextId(nextId + 1)
    e.target.reset()

    console.log('Book added,', response.data)
  }
  const deleteSelectedBook = async (mongoId) => {
    await deleteBook(mongoId)
    setBooks(books.filter((book)=> book._id !== mongoId))
    console.log('Deleted book,') 
  }

  const updateSelectedBook = async (mongoId)=>{
    const newTitle = prompt("enter the new Title")
    const newDesc = prompt('enter the new Description')
    const newAuthor = prompt('enter new Author')

    if (newTitle && newDesc && newAuthor){
      const response = await updateBook(mongoId,{
        title: newTitle,
        description: newDesc,
        author: newAuthor
      })
      console.log("update book", response.data)
      setBooks(
        books.map((book) =>
        book._id === mongoId ? response.data : book)
      )
    }
  }
  const filteredBooks = searchId
  ? books.filter((book)=> book.id === parseInt(searchId))
  :books;
  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" name="title"/>
          <input type="text" placeholder="Description" name="description"/>
          <input type="text" placeholder="Author" name="author"/>

          <button type="submit">Add Book</button>
        </form> 

        <input type='number' placeholder='Search book by id' value={searchId} onChange={(e)=> setSearchId(e.target.value)}
        />

        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Action</th>
            </tr>

            {
                filteredBooks.map(book=>(
                    <tr key={book._id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.description}</td>
                        <td>{book.creator}</td>
                        <td>
                          <button onClick={()=>{deleteSelectedBook(book._id)}}>Delete</button>
                        </td>
                        <td>
                          <button onClick={()=>{updateSelectedBook(book._id)}}>Update</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
  );
}

export default App;
