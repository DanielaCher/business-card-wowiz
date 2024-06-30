
import Reac, { useState }  from 'react';
import './styleClasses.css';
import BARRE from './BARRE'; // Ensure correct import paths
import Functional from './Functional'; // Ensure correct import paths
import HIIT from './HIIT'; // Ensure correct import paths

/*This component now includes a state activeClass to track which class description
 should be displayed. It dynamically renders the corresponding class component based 
 on which button is clicked.
The class descriptions will appear directly below the button row.*/

const ClasseSection = () => {
  const [activeClass, setActiveClass] = useState('');

  const handleClassClick = (className) => {
    setActiveClass(activeClass === className ? '' : className);
  };

  return (
    <div>
      <div className="buttonContainer" style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* Use buttons or divs instead of Links if not navigating away */}
        <button onClick={() => handleClassClick('BARRE')}>Barre</button>
        <button onClick={() => handleClassClick('Functional')}>Functional</button>
        <button onClick={() => handleClassClick('HIIT')}>HIIT</button>
      </div>
      {activeClass === 'BARRE' && <BARRE />}
      {activeClass === 'Functional' && <Functional />}
      {activeClass === 'HIIT' && <HIIT />}
    </div>
  );
};
 export default ClasseSection;
