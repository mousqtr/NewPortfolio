import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="app-section">
      <div className="main-block">
        <div className="sub-block block-left">
          <img src="/img/about.jpg" alt="profile-image" />
        </div>
        <div className="sub-block block-right">
          <h1>A propos de moi</h1>
          <p>
            Je suis Mustapha BENBRIKHO, développeur Full Stack passionné par
            l'informatique et la création de projets innovants. J'aime coder sur
            mon temps libre, que ce soit en solo ou en équipe, et je suis
            particulièrement intéressé par l'architecture et l'infrastructure
            des projets. Mon expertise couvre le développement frontend et
            backend, et je suis toujours enthousiaste à l'idée de relever de
            nouveaux défis.
          </p>
        </div>
      </div>
    </div>
  );
}
