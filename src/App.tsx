import { useState } from 'react';
import { Button } from '@mui/material';
import token_logo from './assets/token_logo.gif';
import mascot from './assets/Mascot_glowed_version.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="left-section">
        <div className="logo-container">
          <img src={token_logo} className="logo" alt="Token Logo" />
          <p className="logo-text">SOULANA</p>
        </div>
        <div className="description">
          <p className="description-text">Incentivised Memecoin Trading Experience</p>
          <p className="announcement-text">To Be Announced...</p>
        </div>
        <div className="buttons-container">
          <Button className="button_intro" variant="contained" onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </Button>
          <Button className="button_intro" variant="contained">
            Docs
          </Button>
        </div>
      </div>
      <div className="right-section">
        <img src={mascot} className="mascot" alt="Mascot" />
      </div>
    </div>
  );
}

export default App;
