import React, { useEffect } from 'react';
import StickyHeader from './components/StickyHeader/StickyHeader';
import './App.css';
import './App_responsive.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skill from './components/Skills/Skills';
import CF from './components/CForm/CForm';
import Footer from './components/Footer/Footer';
import { useState, useRef } from 'react';


function App() {

  // useState
  const [count, counter] = useState(0);

    const add = () => {
      counter(count + 1);      
  }
  const minus = () => {
    counter(count - 1);
  }
  const resets = () => {
    counter(0);
  }

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
      alert('Right-click is disabled!');
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // useEffect
  useEffect(() => {
    alert('Welcome to my Portfolio!')
  })


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

