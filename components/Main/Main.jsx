import "./sections/sections-style/sections.css";
import "../styles/containers.css";

import About from "./sections/About/About";
import FastStart from "./sections/FastStart/FastStart";
import Profession from "./sections/Profession/Profession";
import Partners from "./sections/Partners/Partners";
import ProgramLearn from "./sections/Program-Learn/ProgramLearn";
import { Teaches } from "./sections/Teaches/Teaches";
import  Articles  from "./sections/Articles/Articles";

import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <>
      <main>
        <section className="about">
          <div className="container">
            <div className="container-about">
              <About />
            </div>
          </div>
        </section>
        <section className="fast-start">
          <div className="container">
            <FastStart />
          </div>
        </section>
        <section className="profession">
          <div className="container">
            <Profession />
          </div>
        </section>
        <section className="Partners">
          <div className="container">
            <Partners />
          </div>
        </section>
        <section className="ProgramLearn">
          <div className="container">
            <ProgramLearn />
          </div>
        </section>
        <section className="Teaches">
          <div className="container">
            <Teaches />
          </div>
        </section>
        <section className="Articles">
          <div className="container">
            <Articles />
          </div>
        </section>
      </main>
      <footer className="footer">
         <div className="container">
            <Footer />
         </div>
      </footer>
    </>
  );
};

export default Main;
