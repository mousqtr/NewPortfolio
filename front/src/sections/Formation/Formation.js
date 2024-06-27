import "./Formation.scss";

const data = [
  {
    order: 1,
    image: "/img/formation/cpe.jpg",
    title: "CPE Lyon",
    type: "Ecole d'ingénieur",
    dateFrom: "Sept 2017",
    dateTo: "Juil 2020",
    description: `Ecole d'Ingénieur en Science du Numérique. 
    Diplôme obtenu au sein de la filière Traitement d'image et Modélisation 3D`,
  },
  {
    order: 2,
    image: "/img/formation/charlemagne.jpg",
    title: "Lycée Charlemagne",
    type: "Classes préparatoires",
    dateFrom: "Sept 2014",
    dateTo: "Juil 2017",
    description: `Classes préparatoires scientifique option Physique-Chimie`,
  },
  {
    order: 2,
    image: "/img/formation/henri.jpg",
    title: "Lycée Henri IV",
    type: "Etudes secondaires",
    dateFrom: "Sept 2011",
    dateTo: "Juil 2014",
    description: `Baccalauréat scientifique option Physique-Chimie`,
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
              <h4>{formation.type}</h4>
              <img src={formation.image} alt="formation-image" />
              <h2>{formation.title}</h2>
              <h5>
                {formation.dateFrom} - {formation.dateTo}
              </h5>
              <p>{formation.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Formation;
