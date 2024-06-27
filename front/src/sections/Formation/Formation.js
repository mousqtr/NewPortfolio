import "./Formation.scss";

const data = [
  {
    order: 1,
    image: "/img/formation/cpe.jpg",
    title: "CPE Lyon",
    type: "Ecole d'ingénieur",
    dateFrom: "06/2019",
    dateTo: "08/2019",
    description: `Ecole d'ingénieur en Science du Numérique.`,
  },
  {
    order: 2,
    image: "/img/formation/charlemagne.jpg",
    title: "Lycée Charlemagne",
    type: "Classes préparatoires",
    dateFrom: "06/2019",
    dateTo: "08/2019",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
  {
    order: 2,
    image: "/img/formation/henri.jpg",
    title: "Lycée Henri IV",
    type: "Etudes secondaires",
    dateFrom: "06/2019",
    dateTo: "08/2019",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la
    composition et la mise en page avant impression.`,
  },
  {
    order: 2,
    image: "/img/formation/descartes.jpg",
    title: "Collège René Descartes",
    type: "Collège",
    dateFrom: "06/2019",
    dateTo: "08/2019",
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
