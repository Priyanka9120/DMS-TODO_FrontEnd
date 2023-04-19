import Header from "./Componets/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Componets/SignUp";
import Login from "./Componets/Login";
import Home from "./Componets/Home";
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route>

        </Route>
          <Route path="/signUp" element={<SignUp />} />

          <Route path="/" element={<Login />} />
          
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
