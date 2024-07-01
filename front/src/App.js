import React, { useEffect, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  useEffect(() => {
    window.scrollTo({ top: -60, behavior: "smooth" });
  }, []);

  return (
    <div id="app">
      <NavBar />
      <Routes forceRefresh={false}>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
