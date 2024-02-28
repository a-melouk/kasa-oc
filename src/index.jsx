import "./sass/_main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import About from "./pages/About";
import Error from "./pages/Error";
import Fiche from "./pages/Fiche";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";

function App() {
  document.title = "Kasa";
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
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
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home logements={logements} />} />
          <Route path="/kasa-oc" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:idLogement" element={<Fiche />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
