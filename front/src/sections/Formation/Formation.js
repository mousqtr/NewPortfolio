import "./Formation.scss";

const data = [
  {
    order: 1,
    image: "/img/about.jpg",
    title: "Lycée Henri IV",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
  {
    order: 2,
    image: "/img/about.jpg",
    title: "Lycée Henri IV",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
  {
    order: 2,
    image: "/img/about.jpg",
    title: "Lycée Henri IV",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
  {
    order: 2,
    image: "/img/about.jpg",
    title: "Lycée Henri IV",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
];

function Formation() {
  return (
    <div id="formation" className="app-section">
      <div className="main-block">
        <h1>Formation</h1>
        <h5>Parcours dans l'enseignement secondaire et supérieur</h5>
        <ul>
          {data.map((formation, index) => (
            <li key={index}>
              <img src={formation.image} alt="formation-image" />
              <h2>{formation.title}</h2>
              <p>{formation.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Formation;
