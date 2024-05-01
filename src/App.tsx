import { useState } from 'react';
import { Button } from '@mui/material';
import token_logo from './assets/token_logo.gif';
import mascot from './assets/correct_mascot.png';
import './App.css';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ height: "88%" }}>
            <div className="main"style={{ display: "flex", alignItems: "center",position:"relative" }}>
                <div style={{ flex: "3", height: "100%" }}>
                    <div style={{ background: "#182a34", borderRadius: "0 25px 25px 0", boxShadow: "0px 8px 20px rgba(149, 235, 174, 1), 0px -8px 20px rgba(149, 235, 174, 1)" }}>
                        <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                <p style={{ color: "#5cc884", fontSize: "5vw" }}>SOULANA </p>
                                <img src={token_logo} style={{ height: "auto",maxWidth:"12%", margin: "auto", marginLeft: "0px" }} alt="" />
                            </div>
                            <div style={{ marginTop: "-6vw" }}>
                                <p style={{ color: "#6bb98b", fontSize: "2vw" }}>Incentivised Memecoin Trading Experience</p>
                            </div>
                            <div style={{ marginTop: "-4vw" }}>
                                <p style={{ color: "#b3eaaf", fontSize: "4vw" }}>To Be Announced...</p>
                            </div>
                            <div style={{ marginTop: "20px", paddingBottom: "60px", display: "flex" }}>
                                <Button className="button_intro" style={{ background: "#213840", paddingTop: "1vw", paddingBottom: "1vw", width: "25%", fontSize: "1vw", borderRadius: "20px", textTransform: "none" }}>Contact Us</Button>
                                <Button className="button_intro" style={{ background: "#213840", paddingTop: "1vw", paddingBottom: "1vw", width: "25%", marginLeft: "30%", fontSize: "1vw", borderRadius: "20px", textTransform: "none" }}>Docs</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ flex: '2', overflow: 'hidden', marginTop: "21%" }}>
                    <img src={mascot} style={{ height: "850px", marginLeft: "38%", visibility: "hidden" }} alt="" />
                </div>
            </div>

            <div style={{position:"absolute",bottom:"0",right:"0"}}>
            <img className='pic' src={mascot} style={{ height: "30%",maxWidth:"20vw"}} alt="" />

            </div>
        </div>

    );
}

export default App;
