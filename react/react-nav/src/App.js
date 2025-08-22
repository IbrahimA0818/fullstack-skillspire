import { BrowserRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom"
function Home(){
  const navigate = useNavigate();
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />;
  }

  const HandleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>welcome back</h1>
      <button onClick={HandleLogout}>logout?</button>
    </div>
  );
}

function Login() {
  return <div>Login Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
