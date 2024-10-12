import React from 'react';
import '../CForm/CForm.css';
import '../CForm/CForm_responsive.css';
import {useState, useEffect, useRef} from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "14422eee-f27f-40d8-a3e2-cc29e2b62297");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert('Form Submitted Successfully')
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    // useEffect using useRef
    const inputText = useRef();

    useEffect(() => {
      inputText.current.focus();
    })
  
    return (
      <div className='main-container' id='contact'>
        <div className='container-column'>
        <form onSubmit={onSubmit}>
          <h1>Contact</h1>
          <div className='form-box'>
          <label>Full Name</label>
          <input type="text" name="name" placeholder='Ralph Laurence Valle' ref={inputText} required/>
          <label>Email Address</label>
          <input type="email" name="email" placeholder='ralphlaurencevalle.work@gmail.com' required/>
          <label>Phone Number</label>
          <input type='phone' name='phone' placeholder='+63 976 165 2460' required/>
          <label>Message</label>
          <textarea name="message" placeholder='Hi! Ralph...' rows={4} required></textarea>
          </div>
          <button type="submit" className='view-button'>Submit Form </button>
          <span>{result}</span>
        </form>
        </div>
      </div>
    );
  }