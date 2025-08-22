
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import UserProfile from './components/userprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;