import React, { useEffect } from 'react';
import StickyHeader from './components/StickyHeader/StickyHeader';
import './App.css';
import './App_responsive.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Project from './components/Projects/projects';
import Skill from './components/Skills/Skills';
import CF from './components/CForm/CForm';
import Footer from './components/Footer/Footer';
import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import ScrollToTop from './components/ScrollToTop/scrolltotop';


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
      imageUrl: "../logo.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }, []);


  return (
    <>
    <StickyHeader />
    <Hero />
    <ScrollToTop />
    <About />
    <Project />
    <Skill />
    <CF />
    <Footer />
  </>
  );
}

export default App;

