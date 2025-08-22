import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';

function SearchItems(){
  var items = [
    {id: 1, name: "Test Name", description:"decription"},
    {id: 2, name: "Test Name", description:"dscription"},
    {id: 3, name: "Test Name", description:"decription"},
  ]
  
  const { id } = useParams()

  let search_results = items.find( (item) => item.id === Number(id))

  return (
    <div>
    <h1>Search results: {search_results.id}, {search_results.name}, {search_results.description}</h1>
  </div>
  );
}
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/find/:id" element={<SearchItems />} />
    </Routes>
  </Router>
  );
}

export default App;
