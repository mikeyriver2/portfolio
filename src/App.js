import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Solo } from './assets/images/Dog.svg'; 
import { ReactComponent as SoloText } from './assets/images/ImSolo.svg'; 
import { ReactComponent as ScrollDown } from './assets/images/ScrollDown.svg'; 

import Download from './assets/images/Download.svg';
import Trumpet from './assets/images/Trumpet.png';
import Curve from './assets/images/Curve.svg';
import CurveTablet from './assets/images/Curve_Tablet.svg';
import CurveDesktop from './assets/images/Curve_Desktop.svg';
import Block from './assets/images/Block.png';
import Bloop1 from './assets/images/Bloop1.png';
import Bloop2 from './assets/images/Bloop2.png';

import DP from './assets/images/DP.jpg';

import CustomButton from './reusables/CustomButton/CustomButton';
import CustomCurve from './reusables/CustomCurve/CustomCurve';
import CustomCarousel from './reusables/Carousel/CustomCarousel';
import CustomForm from './reusables/Form/CustomForm';
import Mc from './reusables/MC/Mc';

import {
  visibilityHandler as handler,
  checkIfMobile,
  checkIfDesktop,
} from './helper';
import './App.scss';
import Clouds from './reusables/Clouds/Clouds';


function App() {
  const [domVisibility, setDomVisibility] = useState({
    nav: false,
    basic: false,
    music: false,
    resume: false,
    form: false,
  });

  const handleVisibility = async (e) => {
    const visibilities = await handler(e);
    setDomVisibility(visibilities);
  };

  useEffect(() => {
    const { addEventListener, attachEvent } = window;
  
    // add listener for window
    if (addEventListener) {
      addEventListener('DOMContentLoaded', handleVisibility, false);
      addEventListener('load', handleVisibility, false);
      addEventListener('scroll', handleVisibility, false);
      addEventListener('resize', handleVisibility, false);
  } else if (window.attachEvent)  {
      attachEvent('onDOMContentLoaded', handleVisibility); // Internet Explorer 9+ :(
      attachEvent('onload', handleVisibility);
      attachEvent('onscroll', handleVisibility);
      attachEvent('onresize', handleVisibility);
  }
  }, []);

  return (
    <div className="mikeyriver">
      <CSSTransition
        in={domVisibility.nav}
        classNames="mikeyriver__nav__animation"
        timeout={300}
      >
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
            { checkIfMobile() && <ScrollDown /> }
          </div>
          <div>
            <div
              className="mikeyriver__nav__dp"
              style={{
                background: `url('${DP}')`
              }}
            />
            <div>
              <h2>Hello! Thank you for stopping by</h2>
              <p>Mauris non arcu tellus etiam vivamus augue magna nunc, rhoncus. Mauris odio massa quis vitae urna tincidunt vel. Risus eget nibh quis sit nascetur nisi.</p>
            </div>
          </div>
          { !checkIfMobile() && <ScrollDown /> }
        </section>
      </CSSTransition>
      <CSSTransition
        in={domVisibility.basic}
        classNames="mikeyriver__basic__animation"
      >
        <section className="mikeyriver__basic">
          <Clouds />
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
          { !checkIfMobile() && <Mc /> }
        </section>
      </CSSTransition>
      <CSSTransition
        in={domVisibility.music}
        classNames="mikeyriver__music__animation"
        timeout={300}
      >
        <section className="mikeyriver__music">
          {/** Dunno why but cannot import this particular svg file as SVG component */}
          <img
            className="mikeyriver__music__divider"
            src={checkIfMobile() ? Curve : checkIfDesktop() ? CurveDesktop : CurveTablet} 
          />
          <img
            className="mikeyriver__music__bloop"
            src={Bloop1}
          />
          <img
            className="mikeyriver__music__bloop"
            src={Bloop2}
          />
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
      </CSSTransition>
      <CSSTransition
        in={domVisibility.resume}
        classNames="mikeyriver__resume__animation"
        timeout={300}
      >
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

          <CustomCarousel
            isMobile={checkIfMobile()}
          />
        </section>
      </CSSTransition>
      <section className="mikeyriver__form">
        <CustomForm />
      </section>
    </div>
  );
}

export default App;
