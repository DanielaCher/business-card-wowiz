
import React, { useState } from 'react';


const HIIT = () => {
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
        marginTop: '10px',
        width: 'fit-content',
        padding: '40px 100px',
        fontWeight: 'bold',
        position: 'relative', // Set position to absolute
        top: '15%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(65%, -50%)' // Center the element
    
      } : { display: 'none' }}>
      <h2>HIIT</h2>
      <p>HIGH-INTENSITY INTERVAL TRAINING</p>
      <p>This type of training involves repeated bouts of high</p>
      <p>intensity effort followed by varied recovery times.</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default HIIT;
