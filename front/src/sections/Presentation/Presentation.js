import "./Presentation.scss";

function Presentation() {
  return (
    <div id="presentation" className="app-section">
      <div className="main-block">
        <div className="sub-block block-left">
          <div className="presentation-text">
            <h1>Mustapha BENBRIKHO</h1>
            <h2>Ingénieur Développeur Full Stack</h2>
            <p>Ile-de-France</p>
            <button className="btn btn-dark center">Me contacter</button>
          </div>
        </div>
        <div className="sub-block block-right">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#BFBEE1"
              d="M46.9,-60.7C60.6,-54.7,71.2,-40.6,77.5,-24.4C83.9,-8.2,85.9,10.2,79.9,25.2C73.9,40.1,60,51.7,45.3,58.5C30.7,65.2,15.3,67.1,1,65.7C-13.4,64.4,-26.8,59.9,-36.8,51.6C-46.9,43.4,-53.5,31.5,-62.6,17.1C-71.8,2.8,-83.3,-14,-80.1,-26.7C-76.9,-39.3,-58.8,-47.7,-43,-53C-27.2,-58.2,-13.6,-60.4,1.5,-62.5C16.6,-64.6,33.3,-66.6,46.9,-60.7Z"
              transform="translate(100 100)"
            />
          </svg>
          {/* <img src="/img/profile.png" alt="profile-image" /> */}
        </div>
      </div>
    </div>
  );
}

export default Presentation;
