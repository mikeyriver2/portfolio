import { ReactComponent as Curve } from './assets/images/Curve.svg';
import { ReactComponent as Cloud } from './assets/images/Cloud.svg'; 
import CustomCurve from './reusables/CustomCurve';
import './App.scss';

function App() {
  return (
    <div className="mikeyriver">
      <section className="mikeyriver__nav">

      </section>
      <section className="mikeyriver__basic">
        <Cloud />

      </section>
      <section className="mikeyriver__music">
        <Curve />

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
