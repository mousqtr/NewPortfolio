import { useState, useMemo } from "react";
import "./Skills.scss";

const dictionnary = {
  languages: {
    html: { label: "Javascript", logo: "" },
    css: { label: "CSS", logo: "" },
    javascript: { label: "Javascript", logo: "" },
    php: { label: "PHP", logo: "" },
    python: { label: "Python", logo: "" },
  },
  libraries: {
    react_js: { label: "React.js", logo: "" },
    angular: { label: "Angular", logo: "" },
    node_js: { label: "Node.js", logo: "" },
  },
  databases: {
    mongodb: { label: "MongoDB", logo: "" },
    postgresql: { label: "PostgreSQL", logo: "" },
    mysql: { label: "MySQL", logo: "" },
  },
  tools: {
    vscode: { label: "Visual Studio Code", logo: "" },
  },
};

const data = {
  langages: ["html", "css", "javascript", "python"],
  libraries: ["react_js", "angular"],
  databases: ["mongodb"],
  tools: ["vscode"],
};

const parts = {
  langages: { title: "Langages de programmation" },
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
          <div className="sub-block">
            <h2>{parts[id].title}</h2>
            <ul>
              {data[id].map((elt) => (
                <li></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
