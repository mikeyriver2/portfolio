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
import Loading from './reusables/Loading/Loading';
import Solo3d from './reusables/Solo/Solo';
import Mc from './reusables/MC/Mc';

import {
  visibilityHandler as handler,
  checkIfMobile,
  checkIfDesktop,
  checkAllImagesLoaded,
} from './helper';
import './App.scss';
import Clouds from './reusables/Clouds/Clouds';


function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [domVisibility, setDomVisibility] = useState({
    nav: false,
    basic: false,
    music: false,
    resume: false,
    form: false,
  });

  const handleVisibility = async (e) => {
    const visibilities = await handler();
    setDomVisibility(visibilities);
  };

  console.log(domVisibility.nav);

  useEffect(() => {
    if (imagesLoaded) {
      handleVisibility();
      const { addEventListener, attachEvent } = window;
    
      // add listener for window
      if (addEventListener) {
        addEventListener('scroll', handleVisibility, false);
        addEventListener('resize', handleVisibility, false);
        window.matchMedia("(orientation: portrait)").addEventListener("change", handleVisibility, false);
      } else if (window.attachEvent)  {
        attachEvent('onscroll', handleVisibility);
        attachEvent('onresize', handleVisibility);
      }
    }
  }, [imagesLoaded]);

  useEffect(() => {
    // force show loading icon first hue
    setInterval(() => {
      setImagesLoaded(checkAllImagesLoaded());
    }, 500);  
  }, []);

  const scrollToDom = (identifier) => {
    document.querySelector(identifier).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div className={`mikeyriver ${imagesLoaded ? 'loaded' : ''}`}>
      <Loading />
      <Solo3d
        still={false}
        // I want nav to not show for solo to show
        isMobile={checkIfMobile()}
        show={(domVisibility.basic || domVisibility.music) && !domVisibility.nav}
      />
      <CSSTransition
        in={domVisibility.nav}
        classNames="mikeyriver__nav__animation"
      >
        <section className="mikeyriver__nav">
          <div>
            <div className="mikeyriver__nav__dog">
              <SoloText />
              <Solo3d
                still={true}
              />
            </div>
            <h1>MIKEY RIVERA</h1>
            <ul> 
              <li onClick={() => {
                scrollToDom('.mikeyriver__basic')
              }}>Random Facts About Me</li>
              <li onClick={() => {
                scrollToDom('.mikeyriver__resume')
              }}>My Resume</li>
              <li onClick={() => {
                scrollToDom('.mikeyriver__form')
              }}>Contact Me</li>
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
              <p>
                I am a Management Information Systems graduate from the Ateneo de Manila University, currently working in Shopee as a full stack developer.
                I have extensive experience in software engineering and I truly enjoy working in both its front and back end aspects - from planning all the way to maintenance!
              </p>
              <p>
                The pixel dog you see is dedicated to Solo, my favorite and the best boyo in the whole world! (rip)
              </p>
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
              <h1>MY TECH CAREER BEGAN WITH MINECRAFT</h1>
              <p>
                During my high school days, my cousins and I had our own little minecraft server.
                It was hosted on my family's desktop computer, so I was not allowed to keep it open 24/7.
                I then rented the cheapest Virtual Private Server that I could afford at that time, and I 
                learned the basics of Ubuntu in order to get the server up and running constantly. 
              </p>
              <br />
              <p>
                Unbeknownst  to me, the server would end up garnering traction of players from all over the world and it became a 
                passion project of mine. Not only did I learn some linux scripts, I ended up making friends along the
                way, got some lunch money in the side, and even learned a bit of Java to create plugins for the server. It was through minecraft that I realized 
                I wanted to explore the tech industry and create projects and tools that others would enjoy using. 
              </p>
              <p>
                
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
                I have a taste for <i>tito</i> tunes
              </h2>
              <p>
                Another fun fact about me during my still-in-school-days was me joining an orchestra in college.
                I ended up playing tenor saxophone and trumpet with them for 4 years, and in
                spite of the sleepless nights balancing practicing my instruments and attending rehearsals
                with my studies, I would not have had my college experience any other way!
              </p>
              <br />
              <p>
                I enjoy all forms of music in general, but jazz has a special place in my heart. It is a genre that requires
                a lot of improvisation, and similar to my field of work, you have to learn how to go outside the box and explore
                new ways to create something beautiful.
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
            Listed below are my resume and some projects. Feel free to look through them! If you have any comments/suggestions,
            do not hesitate to let me know by filling the form at the bottom. 
            You can also view my github profile <a href="https://github.com/mikeyriver2">here</a>
          </p>
          <CustomButton
            image={Download}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1_VYaBRYFnvStRLmSlW5g1PTKc-PKYkjs/view?usp=sharing", "_blank");
            }}
          >
            RESUME
          </CustomButton>

          <h2>Some of my notable personal works</h2>

          <CustomCarousel
            isMobile={checkIfMobile()}
          />
        </section>
      </CSSTransition>
      <section className="mikeyriver__form">
        <CustomForm />
        <p style={{fontSize: '.8em', color: 'white', marginTop: '40px'}}>
          Site designed with the help of Valerie Cobankiat
        </p>
      </section>
    </div>
  );
}

export default App;
