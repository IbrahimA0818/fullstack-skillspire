import Userprofile from './components/userprofile';
import ClickButton from './components/clickbutton';
import TodoList from './components/todolist';
import './App.css';

function App() {
  return (
    <div className="App">
     <Userprofile 
     name="john doe"
     bio="instructor at college"
     avatarURL="https://via.placeholder.com/100x100/0066cc/ffffff?text=JD"
     />
     <div>
      <ClickButton />
     </div>
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <TodoList />
    </div>
    </div>
  );
};

export default App;
