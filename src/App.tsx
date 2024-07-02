
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
import Mint from "./Mint"
import Home from './Home';
function App() {

    return (

            <Router>
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/mint" element={<Mint />} />

                </Routes>
            </Router>
        
    );
}

export default App;
