import Presentation from "./components/Presentation/Presentation";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Formation from "./components/Formation/Formation";
import Projects from "./components/Projects/Projects";

import "./Portfolio.scss";

function Portfolio() {
  return (
    <div id="portfolio">
      <Presentation />
      <AboutMe />
      <Skills />
      <Experiences />
      <Formation />
      <Projects />
    </div>
  );
}

export default Portfolio;
