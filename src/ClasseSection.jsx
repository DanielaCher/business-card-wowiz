
import React from 'react';
import { Link } from 'react-router-dom';

const ClasseSection = () => {
  return (
    <div>
      <div className="buttonContainer">
        <Link to="/Barre">Barre</Link>
        <Link to="/Functional">Functional</Link>
        <Link to="/HIIT">HIIT</Link>
      </div>
    </div>
  );
};

export default ClasseSection;
