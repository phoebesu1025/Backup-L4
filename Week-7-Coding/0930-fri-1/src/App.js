
import './App.css';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="pages">
            <div><Link to="/">Home </Link></div>
            <div><Link to="/about">About </Link></div>
            <div><Link to="/contact">Contact </Link></div>
            <div> <Link to="/login">Login </Link></div>
            <div> <Link to="/SignUp">Sign-Up </Link></div>
            <br />
          </div>
          <div className="routes">
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </div>

        </BrowserRouter>
      </div>
    </>

  )
}
export default App;
