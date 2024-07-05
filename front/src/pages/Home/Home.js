import Panel from "./components/Panel/Panel";
import SummaryHome from "./components/SummaryHome/SummaryHome";
import "./Home.scss";

function Home() {
  return (
    <div id="home">
      <Panel />
      <SummaryHome />
    </div>
  );
}

export default Home;
