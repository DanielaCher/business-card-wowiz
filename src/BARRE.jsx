
import React, { useState } from 'react';


const BARRE = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  }; 
  return (
      <div style={isVisible ? {
        display: 'block',
        color: 'rgb(23, 23, 113)', // Text color when visible
        background: 'rgb(230, 280, 183)', // Background color when visible
        border: '2px solid rgb(255, 185, 150)',
        borderRadius: '20px',
        marginTop: '2%',
        width: '30%',
        padding: '2% 3%',
        fontWeight: 'bold',
        position: 'relative', // Set position to absolute
        top: '15%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-150%, -35%)' // Center the element
    
      } : { display: 'none' }}>
      <h2>BARRE</h2>
      <p>BARRE training aims to improve and simulate our day-to-day activities.</p>
      <p>BARRE training works on several fitness goals at the same time:</p>
      <p>aerobic and anaerobic endurance, strength, coordination, speed and agility.</p>
      <button onClick={handleClose} style={{ color: 'rgb(23, 23, 113)', backgroundColor: 'rgb(230, 280, 183)' }}>x</button>
    </div>
  );
};

export default BARRE;