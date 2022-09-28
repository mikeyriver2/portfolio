import { ReactComponent as Cloud } from './assets/images/Cloud.svg';
import { ReactComponent as Solo } from './assets/images/Dog.svg'; 
import { ReactComponent as SoloText } from './assets/images/ImSolo.svg'; 
import { ReactComponent as ScrollDown } from './assets/images/ScrollDown.svg'; 

import Download from './assets/images/Download.svg';
import Trumpet from './assets/images/Trumpet.png';
import Curve from './assets/images/Curve.svg';
import Block from './assets/images/Block.png';
import DP from './assets/images/DP.jpg';

import CustomButton from './reusables/CustomButton/CustomButton';
import CustomCurve from './reusables/CustomCurve/CustomCurve';
import CustomCarousel from './reusables/Carousel/CustomCarousel';
import CustomForm from './reusables/Form/CustomForm';

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
        <div>
            <img src={Block} />
            <h1>IT BEGAN WITH MINECRAFT</h1>
            <p>
              Tristique vitae sapien, varius tortor, cursus enim. Quam sem netus id at adipiscing aliquet metus facilisi. Senectus magna condimentum et, purus.
            </p>
            <p>
              Tristique vitae sapien, varius tortor, cursus enim. Quam sem netus id at adipiscing aliquet metus facilisi. Senectus magna condimentum et, purus.
            </p>
        </div>
  
      </section>
      <section className="mikeyriver__music">
        {/** Dunno why but cannot import this particular svg file as SVG component */}
        <img className="mikeyriver__music__divider" src={Curve} />

        <div>
            <img src={Trumpet} />
            <h1>PASSION FOR MUSIC</h1>
            <h2>
              I have a taste for tito tunes
            </h2>
            <p>
              Tristique vitae sapien, varius tortor, cursus enim. Quam sem netus id at adipiscing aliquet metus facilisi. Senectus magna condimentum et, purus.
            </p>
        </div>
      </section>
      <section className="mikeyriver__resume">
        <CustomCurve />
        <h1>MY RESUME AND PORTFOLIO</h1>
        <p>
          Tristique vitae sapien, varius tortor, cursus enim. Quam sem netus id at adipiscing aliquet metus facilisi. Senectus magna condimentum et, purus.
        </p>
        <CustomButton
          image={Download}
        >
          RESUME
        </CustomButton>

        <h2>Some of my works</h2>

        <CustomCarousel />
      </section>
      <section className="mikeyriver__form">
        <CustomForm />
      </section>
    </div>
  );
}

export default App;
