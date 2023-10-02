import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./Skills.scss";

const levels = {
  senior: "Senior",
  intermediate: "Intermédiaire",
  junior: "Junior",
};
const languages = [
  { label: "Javascript", logo: "", level: "senior" },
  { label: "PHP", logo: "", level: "senior" },
  { label: "HTML/CSS/SCSS", logo: "", level: "senior" },
  { label: "Python", logo: "", level: "intermediate" },
  { label: "C++", logo: "", level: "intermediate" },
];

const libraries = [
  { label: "React.js", logo: "", level: "senior" },
  { label: "Node.js", logo: "", level: "senior" },
  { label: "Angular", logo: "", level: "senior" },
];

function Skills() {
  const languagePage = useState(1);
  const libraryPage = useState(1);

  const [displayedLanguages, setDisplayLanguages] = useState(
    languages.slice(0, 3),
  );
  const [displayedLibraries, setDisplayLibraries] = useState(
    libraries.slice(0, 3),
  );
  return (
    <div id="skills" className="app-section">
      <div className="block">
        <h1>Langages de programmation</h1>
        <div className="cols">
          <AiOutlineLeft />
          {displayedLanguages.map((language, index) => {
            return <div className="column">{language.label}</div>;
          })}
          <AiOutlineRight />
        </div>
      </div>
      <div className="block">
        <h1>Frameworks & Librairies</h1>
        <div className="cols">
          <AiOutlineLeft />
          {displayedLibraries.map((library, index) => {
            return <div className="column">{library.label}</div>;
          })}
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
}

export default Skills;
