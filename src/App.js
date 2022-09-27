import { ReactComponent as Cloud } from './assets/images/Cloud.svg';
import { ReactComponent as Solo } from './assets/images/Dog.svg'; 
import { ReactComponent as SoloText } from './assets/images/ImSolo.svg'; 
import { ReactComponent as ScrollDown } from './assets/images/ScrollDown.svg'; 

import Curve from './assets/images/Curve.svg';
import DP from './assets/images/DP.jpg';

import CustomCurve from './reusables/CustomCurve';

import './App.scss';

function App() {
  return (
    <div className="mikeyriver">
      <section className="mikeyriver__nav">
        <div>
          <div className="mikeyriver__nav__dog">
            <SoloText />
            <Solo />
          </div>
          <h1>MIKEY RIVERA</h1>
          <ul> 
            <li>About Me</li>
            <li>My Resume</li>
            <li>Contact Me</li>
          </ul>
          <ScrollDown />
        </div>
        <div>
          <div
            className="mikeyriver__nav__dp"
            style={{
              background: `url('${DP}')`
            }}
          />
          <h2>Hello! Thank you for stopping by</h2>
          <p>Mauris non arcu tellus etiam vivamus augue magna nunc, rhoncus. Mauris odio massa quis vitae urna tincidunt vel. Risus eget nibh quis sit nascetur nisi.</p>
        </div>
      </section>
      <section className="mikeyriver__basic">
        <Cloud />
  
      </section>
      <section className="mikeyriver__music">
        {/** Dunno why but cannot import this particular svg file as SVG component */}
        <img className="mikeyriver__music__divider" src={Curve} />

      </section>
      <section className="mikeyriver__resume">
        <CustomCurve />

      </section>
      <section className="mikeyriver__form">
        
      </section>
    </div>
  );
}

export default App;
