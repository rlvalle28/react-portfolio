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
    let timerInterval;
    Swal.fire({
      title: "Welcome to my portfolio!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
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

