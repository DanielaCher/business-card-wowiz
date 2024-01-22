
import React from 'react';
import { Link } from 'react-router-dom';


const ClasseSection = () => {
  return (
    <div>
      <div className="buttonContainer">
        <Link to="/Barre" className="classLink">Barre</Link>
        <Link to="/Functional" className="classLink">Functional</Link>
        <Link to="/HIIT" className="classLink">HIIT</Link>
      </div>
    </div>
  );
};
 export default ClasseSection;
