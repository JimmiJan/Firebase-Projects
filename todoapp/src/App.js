import logo from './logo.svg';
import './App.css';
// import TodoApp from './config/TodoApp';
// import TodoJams from './config/TodoJams';
import SingUp from './config/SingUp';
import Login from './config/Login';
import { Route, Routes } from 'react-router-dom';
import Dasboard from './config/Dasboard';






function App() {
  return (
    <div className="csss">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



      {/* <TodoApp /> */}
      {/* <TodoJams /> */}
      {/* <SingUp /> */}

      <Routes>

      <Route path="/Singup" element={<SingUp />} />
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={<Dasboard />} />
      

      </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
