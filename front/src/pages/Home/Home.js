import Panel from "./components/Panel/Panel";
import NavBarHome from "./components/NavbarHome/NavbarHome";
import "./Home.scss";

function Home() {
  return (
    <div id="home">
      <Panel />
      <NavBarHome />
    </div>
  );
}

export default Home;
