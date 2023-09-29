import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Skills.scss";

function Skills() {
  return (
    <div id="skills" className="app-section">
      <div className="block">
        <h1>Langages de programmation</h1>
        <div className="cols">
          <AiOutlineLeft />
          <div className="column">Javascript</div>
          <div className="column">PHP</div>
          <div className="column">Python</div>
          <AiOutlineRight />
        </div>
      </div>
      <div className="block">
        <h1>Frameworks & Librairies</h1>
        <div className="cols">
          <AiOutlineLeft />
          <div className="column">React.js</div>
          <div className="column">Node.js</div>
          <div className="column">Angular</div>
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Skills;
