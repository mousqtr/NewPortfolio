import { useState, useMemo } from "react";
import "./Skills.scss";

const dictionnary = {
  languages: {
    html: { label: "Javascript", logo: "react.png" },
    css: { label: "CSS", logo: "react.png" },
    javascript: { label: "Javascript", logo: "react.png" },
    php: { label: "PHP", logo: "react.png" },
    python: { label: "Python", logo: "react.png" },
  },
  libraries: {
    react_js: { label: "React.js", logo: "react.png" },
    angular: { label: "Angular", logo: "react.png" },
    node_js: { label: "Node.js", logo: "react.png" },
  },
  databases: {
    mongodb: { label: "MongoDB", logo: "react.png" },
    postgresql: { label: "PostgreSQL", logo: "react.png" },
    mysql: { label: "MySQL", logo: "react.png" },
  },
  tools: {
    vscode: { label: "Visual Studio Code", logo: "react.png" },
  },
};

const data = {
  languages: ["html", "css", "javascript", "python"],
  libraries: ["react_js", "angular"],
  databases: ["mongodb"],
  tools: ["vscode"],
};

const parts = {
  languages: { title: "Langages de programmation" },
  libraries: { title: "Frameworks & Librairies" },
  databases: { title: "Bases de données" },
  tools: { title: "Outils" },
};

function Skills() {
  return (
    <div id="skills" className="app-section">
      <div className="main-block">
        <h1>Boite à outils</h1>
        {Object.keys(parts).map((id) => (
          <div key={id} className="sub-block">
            <h2>{parts[id].title}</h2>
            <ul>
              {data[id].map((elt) => (
                <li key={elt}>
                  <img
                    src={`/img/skills/libraries/react.png`}
                    // src={`/img/skills/${id}/${dictionnary[id][elt].logo}`}
                    alt="profile-image"
                  />
                  <div className="elt-title">{dictionnary[id][elt].label}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
