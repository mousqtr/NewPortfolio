import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
