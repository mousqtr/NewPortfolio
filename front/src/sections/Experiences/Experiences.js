import React from "react";
import { TECHNOLOGIES_BY_FIELD } from "../../constants/technologies";
import "./Experiences.scss";

const data = [
  {
    order: 1,
    image: "/img/experiences/sfr.png",
    title: "Ingénieur Développeur Full Stack",
    company: "SFR",
    dateFrom: "03/2021",
    dateTo: "",
    city: "Paris",
    country: "France",
    tags: [
      "angular",
      "symfony",
      "zend_framework",
      "html",
      "css",
      "javascript",
      "php",
      "python",
      "java",
    ],
    description: `- Evolution et maintenance de l’application de référencement et de configuration de tous les équipements SFR en France (équipe de 16 pers)
    - Migration de l'application (Zend 2/jQuery vers Symfony/Angular)
    - Développement d'un module en React.js
    - Collaboration avec plusieurs acteurs Réseau (Ingénierie, Outils, Production, Exploitation ..) 
    - Tests unitaires et fonctionnels
    - Contrôle de qualité du code (SonarQube, Revue de code)
    - Documentation technique et fonctionnelle (architecture, formations, mode d'emploi, ...)
    - Formation et accompagnement des nouveaux développeurs`,
  },
  {
    order: 1,
    image: "/img/experiences/barco.png",
    title: "Ingénieur Développeur C++",
    company: "Barco",
    dateFrom: "03/2020",
    dateTo: "08/2020",
    city: "Courtrai",
    country: "Belgique",
    tags: ["cplusplus"],
    description: `- Améliorer le pipeline graphique des écrans médicaux (C++ / Visual Studio)
    - Créer des bibliothèques de synthèses d’images en C++ à l’aide des API 
    graphiques Vulkan, OpenGL et Direct3D
    - Coder les fragments shaders de traitement d’image (GLSL / HLSL)
    - Élaborer les tests unitaires afin de vérifier la fiabilité du programme
    - Optimiser les performances du programme 
    - Rédiger les spécifications techniques`,
  },
  {
    order: 1,
    image: "/img/experiences/sncf.png",
    title: "Data Analyst",
    company: "Groupe SNCF",
    dateFrom: "06/2019",
    dateTo: "08/2019",
    city: "Paris",
    country: "France",
    tags: ["dax", "power_query_m"],
    description: `- Stage d'élève ingénieur au sein du Pôle Excellence Opérationnel de la Direction des lignes N&U"
    - Traiter des données via Power BI pour répondre à des problématiques de production, d’exploitation et de lutte anti-fraude (Langage M Power Query, DAX)
    - Rédiger de rapports explicatifs assurant la pérennité des travaux réalisés`,
  },
];

function Experiences() {
  return (
    <div id="experiences" className="app-section">
      <div className="main-block">
        <h1>Expériences professionnelles</h1>
        <h3>Missions réalisées dans le cadre d'un contexte professionel</h3>
        {data
          .sort((a, b) => a.order - b.order)
          .map((elt, index) => (
            <div key={index} className="exp-block">
              <div className="sub-block block-left">
                <img src={elt.image} alt="profile-image" />
              </div>
              <div className="sub-block block-right">
                <h2>{elt.title}</h2>
                <h4>Mars 2021 - Aujourd’hui · 3 ans 4 mois</h4>
                <h4>
                  {elt.company} - {elt.city}, {elt.country}
                </h4>
                <div className="tags">
                  {elt.tags.map((tag, indexTag) => (
                    <div
                      key={indexTag}
                      className="tag"
                      style={{
                        backgroundColor: TECHNOLOGIES_BY_FIELD[tag].bgColor,
                      }}
                    >
                      {TECHNOLOGIES_BY_FIELD[tag].label}
                    </div>
                  ))}
                </div>
                <p>
                  {elt.description.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experiences;
