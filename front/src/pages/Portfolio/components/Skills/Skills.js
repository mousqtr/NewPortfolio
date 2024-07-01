import { useState, useMemo } from "react";
import {
  TECHNOLOGIES,
  TECHNOLOGIES_LIST,
} from "../../../../constants/technologies";
import "./Skills.scss";

const data = {
  languages: ["html", "css", "javascript", "php", "python", "cplusplus"],
  libraries: ["react_js", "angular", "node_js", "symfony", "zend_framework"],
  databases: ["mongodb", "postgresql", "mysql"],
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
        <h3>
          Technologies fréquemment utilisées (triées par niveau de maîtrise)
        </h3>
        {Object.keys(parts).map((id) => (
          <div key={id} className="sub-block">
            <h2>{parts[id].title}</h2>
            <ul>
              {data[id].map((elt) => (
                <li key={elt}>
                  <img
                    src={`/img/skills/${id}/${TECHNOLOGIES[id][elt].logo}`}
                    alt="profile-image"
                  />
                  <div
                    className="elt-title"
                    style={{ color: TECHNOLOGIES[id][elt].bgColor }}
                  >
                    {TECHNOLOGIES[id][elt].label}
                  </div>
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
