
import React, { useState } from 'react';


const HIIT = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  }; 
  return (
      <div style={isVisible ? {
        display: 'block',
        color: 'rgb(23, 23, 113)', 
        background: 'rgb(230, 280, 183)', 
        border: '2px solid rgb(255, 185, 150)',
        borderRadius: '20px',
        marginTop: '2%',
        width: '30%',
        padding: '2% 3%',
        margin: '0 10px',
        fontWeight: 'bold',
        position: 'relative', 
        top: '15%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(55%,-35%)' // Center the element
    
      } : { display: 'none' }}>
      <h2>HIIT</h2>
      <p>HIGH-INTENSITY INTERVAL TRAINING</p>
      <p>This type of training involves repeated bouts of high</p>
      <p>intensity effort followed by varied recovery times.</p>
      <button onClick={handleClose} style={{ color: 'rgb(23, 23, 113)', backgroundColor: 'rgb(230, 280, 183)' }}>x</button>
    </div>
  );
};

export default HIIT;
