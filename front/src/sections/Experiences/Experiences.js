import { TECHNOLOGIES_BY_FIELD } from "../../constants/technologies";
import "./Experiences.scss";

const data = [
  {
    order: 1,
    image: "/img/about.jpg",
    title: "Développeur Full Stack chez SFR",
    tags: ["html", "css", "javascript", "python"],
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression. Le Lorem
    Ipsum est le faux texte standard de l'imprimerie depuis les
    années 1500, quand un imprimeur anonyme assembla ensemble des
    morceaux de texte pour réaliser un livre spécimen de polices
    de texte.`,
  },
  {
    order: 1,
    image: "/img/about.jpg",
    title: "Développeur Full Stack chez SFR",
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
    image: "/img/about.jpg",
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

function Experiences() {
  return (
    <div id="experiences" className="app-section">
      <div className="main-block">
        <h1>Expériences professionnelles</h1>
        {data
          .sort((a, b) => a.order - b.order)
          .map((elt, index) => (
            <div key={index} className="exp-block">
              <div className="sub-block block-left">
                <img src={elt.image} alt="profile-image" />
              </div>
              <div className="sub-block block-right">
                <h2>{elt.title}</h2>
                <div className="tags">
                  {elt.tags.map((tag) => (
                    <div
                      className="tag"
                      style={{
                        backgroundColor: TECHNOLOGIES_BY_FIELD[tag].bgColor,
                      }}
                    >
                      {TECHNOLOGIES_BY_FIELD[tag].label}
                    </div>
                  ))}
                </div>
                <p>{elt.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experiences;
