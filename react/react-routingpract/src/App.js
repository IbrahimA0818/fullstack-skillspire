import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Japan from './japan.avif'
import Food from './pizza.jpeg'

function FavoriteFood(){
  return(
    <div>
      <h1>fav food: pizza</h1>
      <img src={Food} alt="pizza" />
    </div>
  )
}
function FavDes(){
  return(
    <div>
      <h1>fav destination: japan</h1>
      <img src={Japan} alt='japan' />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <h1>hello</h1>
        <Routes>
          <Route path="/home" element={<h1>home</h1>} />
          <Route path="/display-name" element={<h1>Ibrahim Ajebna</h1>} />
          <Route
            path="/display-food"
            element={<FavoriteFood />}
          />
          <Route
            path="/display-destination"
            element={FavDes
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
