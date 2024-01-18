import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>W  O  W  I  Z</h1>
        <img src =".\images\Logo.png" className="App-logo" alt="logo" />
        <h2>
         <ul>FITNESS GARDEN</ul>
         <ul>By Daniela</ul>
         <ul></ul>
        </h2>
        
      </header>

      

      <section className="AboutMe">
        <h2>About Me</h2>
        <p className="Description">Hi, I'm Daniela, a certified fitness trainer 
        Personal Training
        Group Classes
        
        with a passion for helping people achieve their fitness goals.</p>
      </section>
      <section className="Services">
        <h2>Classes</h2>
        
        <ul className="ClassesList">
        <li>HIIT</li> 
        <li>FUNCTIONAL </li>
        <li>BARRE</li> 
        </ul>
      </section>


      <section className="Contact">
        <h2>Contact Us</h2>       
        <ul className="contactLinks">
          <li><a
          className="App-link"
          href="https://chat.whatsapp.com/KkwPOvyYxJtAVOCTkarVpz"
          target="_blank"
          rel="noopener noreferrer"S
        >
        Whatsapp Group
        </a></li>

          <li><a
          className="App-link"
          href="https://instagram.com/daniela_chernoguz?igshid=MzMyNGUyNmU2YQ=="
          target="_blank"
          rel="noopener noreferrer"S
        >
         Instagram
        </a></li>

          <li><a
          className="App-link"
          href="http://onelink.to/sbs5xh"
          target="_blank"
          rel="noopener noreferrer"S
        >
         Fitter
        </a></li>

        </ul>
        </section>

      <section className="Sign Now">
        <ul>
        <li><a
          className="App-link"
          href="http://onelink.to/sbs5xh"
          target="_blank"
          rel="noopener noreferrer"S
        >
         Sign Now
        </a></li> 
        </ul>
      </section>
       
        


      
    </div>
  );
}

export default App;
