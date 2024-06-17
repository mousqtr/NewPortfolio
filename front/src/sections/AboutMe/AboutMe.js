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
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte.
          </p>
        </div>
      </div>
    </div>
  );
}
