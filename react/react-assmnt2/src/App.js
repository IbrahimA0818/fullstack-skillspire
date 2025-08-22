import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import ToggleMessage from './components/ToggleMessage';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/randomnumber" element={<RandomNumberGenerator />} />
      <Route path="/toggle" element={<ToggleMessage />} />
      <Route path="/" element={ <div><h1>go to /randomnumber for the generator and /toggle for toggle message</h1></div>}/>
    </Routes>
  </Router>
  );
}

export default App;
