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
import Swal from 'sweetalert2';


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

  // useEffect
  useEffect(() => {
    Swal.fire({
      title: "Hi!",
      text: "Welcome to my Portfolio",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }, []); // Runs only once when the component is mounted


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

