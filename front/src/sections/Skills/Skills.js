import "./Skills.scss";

function Skills() {
  return (
    <div id="skills" className="app-section">
      <div className="block">
        <h1>Langages de programmation</h1>
        <div className="cols">
          <div className="column">Javascript</div>
          <div className="column">PHP</div>
          <div className="column">Python</div>
        </div>
      </div>
      <div className="block">
        <h1>Frameworks & Librairies</h1>
        <div className="cols">
          <div className="column">React.js</div>
          <div className="column">Node.js</div>
          <div className="column">Angular</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
