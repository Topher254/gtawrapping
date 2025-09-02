import React from 'react';
import Navbar from './Components/Nav/Navbar';
import Hero from './Components/Hero/Hero';
import BHero from './Components/Bhero/Bhero';
import Portfolio from './Components/Portfolio/Portfolio';
import How from './Components/How/How';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <BHero />
      </section>
      <section id="services">
        <Portfolio />
      </section>
      <section id="process">
        <How />
      </section>
      <section id='footer'>
      <Footer />
      </section>
    </div>
  );
}

export default App;
