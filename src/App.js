import React from 'react';
import StickyHeader from './components/StickyHeader/StickyHeader';
import './App.css';
import './App_responsive.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skills/Skills';
import CF from './components/CForm/CForm';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <StickyHeader />
    <Hero />
    <About />
    <Skill />
    <CF />
    <Footer />
  </>
  );
}

export default App;

