import "./App.css";
import { NavBar } from "../NavBar/Navbar";
import { Logo } from "../NavBar/Logo";
import { HeroImage } from '../HeroImage/HeroImage';
import {TeaSection} from '../TeaSection/TeaSection';
import {Locations} from '../Locations/Locations';
import {Contact} from '../Contact/Contact';
function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavBar />
      </header>
      <HeroImage />
      <TeaSection />
      <Locations />
      <Contact />
      <footer style={{textAlign: 'left',margin: '20px'}}>
        copyright The Tea Cozy 2017
      </footer>
    </div>
  );
}

export default App;
