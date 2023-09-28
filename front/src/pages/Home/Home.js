import Presentation from './../../sections/Presentation/Presentation';
import Skills from './../../sections/Skills/Skills';
import Experiences from './../../sections/Experiences/Experiences';
import Formation from './../../sections/Formation/Formation';
import Footer from './../../sections/Footer/Footer';

import "./Home.scss";

function Home() {
  return <div id="home" className="app-section">
    <Presentation />
    <Skills />
    <Experiences />
    <Formation />
    <Footer />
  </div>;
}

export default Home;
