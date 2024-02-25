import "../src/styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./components/Error";
import Fiche from "./pages/Fiche";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import React, { useState, useEffect, StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("../data/logements.json")
      // fetch("http://127.0.0.1:5500/src/data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
        localStorage.setItem("logements", JSON.stringify(data));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home logements={logements} />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:idLogement" element={<Fiche />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
