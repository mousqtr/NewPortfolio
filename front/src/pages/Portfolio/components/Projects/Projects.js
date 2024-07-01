import Tag from "../../../../components/Tag/Tag";
import "./Projects.scss";

const data = [
  {
    order: 1,
    image: "/img/about.jpg",
    title: "Site de rencontre",
    tags: ["html", "css", "javascript", "python"],
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
      composition et la mise en page avant impression. Le Lorem
      Ipsum est le faux texte standard de l'imprimerie depuis les
      années 1500, quand un imprimeur anonyme assembla ensemble des
      morceaux de texte pour réaliser un livre spécimen de polices
      de texte.`,
  },
  {
    order: 2,
    title: "Site de jeu",
    tags: ["html", "css", "javascript"],
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
      composition et la mise en page avant impression. Le Lorem
      Ipsum est le faux texte standard de l'imprimerie depuis les
      années 1500, quand un imprimeur anonyme assembla ensemble des
      morceaux de texte pour réaliser un livre spécimen de polices
      de texte.`,
  },
  {
    order: 1,
    title: "Développeur Full Stack chez SFR",
    tags: ["html", "css", "javascript"],
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
      composition et la mise en page avant impression. Le Lorem
      Ipsum est le faux texte standard de l'imprimerie depuis les
      années 1500, quand un imprimeur anonyme assembla ensemble des
      morceaux de texte pour réaliser un livre spécimen de polices
      de texte.`,
  },
];

function Projects() {
  return (
    <div id="projects" className="app-section">
      <div className="main-block">
        <h1>Projects</h1>
        <h3>Liste de projets personnels ou collectifs</h3>
        <div className="projects-block">
          {data
            .sort((a, b) => a.order - b.order)
            .map((elt, index) => (
              <div key={index} className="sub-block">
                <h2>{elt.title}</h2>
                <div className="tags">
                  {elt.tags.map((tag, indexTag) => (
                    <Tag key={indexTag} tag={tag} />
                  ))}
                </div>
                <p>{elt.description}</p>
                <div className="buttons">
                  <button className="btn btn-dark center">Demo</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
