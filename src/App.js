import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project from "./Components/Project";
function App() {
  return (
    <div className="back">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Login />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Login/> */}
      {/* <div className="back">

  </div> */}
    </div>
  );
}

export default App;
