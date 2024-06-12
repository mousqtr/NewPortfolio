import Presentation from "./../../sections/Presentation/Presentation";
import AboutMe from "./../../sections/AboutMe/AboutMe";
import Skills from "./../../sections/Skills/Skills";
import Experiences from "./../../sections/Experiences/Experiences";
import Formation from "./../../sections/Formation/Formation";
import Footer from "./../../sections/Footer/Footer";

import "./Home.scss";

function Home() {
  return (
    <div id="home">
      <Presentation />
      <AboutMe />
      <Skills />
      <Experiences />
      <Formation />
      <Footer />
    </div>
  );
}

export default Home;
