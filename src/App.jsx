import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import ClasseSection from './ClasseSection';//TODO:??
import BARRE from './BARRE';
import Functional from './Functional';
import HIIT from './HIIT';

import './App.css';
import './styleClasses.css';


function App() {
  return  (
  <Router>

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
        <ul className="Description">
          <p>Hello, I'm Daniela.</p>
          <p>As a former gymnast and dancer, I've transitioned into coaching both individuals and groups.</p>
          <p>My training sessions encompass Functional, Hiit, and Barre exercises, blending elements from the realms of gymnastics, dance, and yoga.</p>
          <p>With a passion for movement, I take pleasure in sharing my knowledge and enthusiasm with my trainees.</p>
          <p>I extend a warm invitation for you to join me on this fitness journey!</p>
    
      </ul>
      </section>
      <section className="Classes">
        <ClasseSection />

      <Routes>
        <Route path="/BARRE" component={BARRE} />
        <Route path="/Functional" component={Functional} />
        <Route path="/HIIT" component={HIIT} />
      </Routes>
      <ul>
        <li><a
          className="App-link"
          href="http://onelink.to/sbs5xh"
          target="_blank"
          rel="noopener noreferrer"S
        >
         Sign Now(Schedule)
        </a></li> 
        </ul>
      
      </section>
      <section className="Contact"> 
        <h2>Contact Us</h2>  

        <div className="contactLinks">
          <a 
          href="https://chat.whatsapp.com/KkwPOvyYxJtAVOCTkarVpz"
          target="_blank"
        ><img src=".\images\whatsapp.svg"  alt="WhatsApp Icon" width="80" height="80"/>
        </a>

          <a
          href="https://instagram.com/daniela_chernoguz?igshid=MzMyNGUyNmU2YQ=="
          target="_blank"
        ><img src=".\images\instagram.svg" alt="Instagram Icon" width="80" height="80"/>

        </a>

          <a
          href= "https://apps.apple.com/il/app/fitter-group-fitness/id1567774458"
          target="_blank"
        ><img src=".\images\calendar-regular.svg" alt="Fitter Icon" width="80" height="80"/>
        </a>
        </div>
        <p>Address: Harav Susu Yosef 5, Beer Sheva</p>
        <p>Phone: 052-4831152</p>
        <p>Email: daniela.chernoguz@gmail.com</p>
      
      </section>
    

     
       
  
   
     </div> 
    </Router> 
   );  
}

export default App;
