import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  useEffect(() => {
    window.scrollTo({ top: -60, behavior: "smooth" });
  }, []);
  return (
    <div id="app">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
