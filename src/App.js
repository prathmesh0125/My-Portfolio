import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="back">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/account" element={< Login/>} />
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
