import { useState } from 'react';
import { Button } from '@mui/material';
import token_logo from './assets/token_logo.gif';
import mascot from './assets/correct_mascot.png';
import { useEffect } from 'react';
import mobileMascot from "./assets/mobileMascot.png"
import './App.css';
function App() {
    const [] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const orientation = useOrientation();
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
 <>
            {orientation.startsWith('portrait') ? (
                <MobileComponent />
            ) : width <= 900 ? (
                <MobileComponent />
            ) : (
                <Desktop />
            )}
        </>        </>

    );
}
function Desktop() {
    return (<div style={{ height: "88%" }}>
        <div className="main" style={{ display: "flex", alignItems: "center", position: "relative" }}>
            <div style={{ flex: "3", height: "100%" }}>
                <div style={{ background: "#182a34", borderRadius: "0 25px 25px 0", boxShadow: "0px 8px 20px rgba(149, 235, 174, 1), 0px -8px 20px rgba(149, 235, 174, 1)" }}>
                    <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: 'row' }}>
                            <p style={{ color: "#5cc884", fontSize: "4vw" }}>SOULANA </p>
                            <img src={token_logo} style={{ height: "auto", maxWidth: "12%", margin: "auto", marginLeft: "0px" }} alt="" />
                        </div>
                        <div style={{ marginTop: "-6vw" }}>
                            <p style={{ color: "#6bb98b", fontSize: "1.6vw" }}>Incentivised Memecoin Trading Experience</p>
                        </div>
                        <div style={{ marginTop: "-4vw" }}>
                            <p style={{ color: "#b3eaaf", fontSize: "3vw" }}>To Be Announced...</p>
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

        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
            <img className='pic' src={mascot} style={{ height: "30%", maxWidth: "33vw" }} alt="" />

        </div>
    </div>)
}
function MobileComponent() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column",marginTop:"-40vw" }}>
                <div style={{ background: "#182a34", borderRadius: "25px 25px 25px 25px", boxShadow: "0px 8px 20px rgba(149, 235, 174, 1), 0px -8px 20px rgba(149, 235, 174, 1)",width:"90%",margin:"auto" }}>
                    <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: 'row' }}>
                            <p style={{ color: "#5cc884", fontSize: "3rem" }}>SOULANA </p>
                            <img src={token_logo} style={{ height: "auto", maxWidth: "21%", margin: "auto", marginLeft: "0px" }} alt="" />
                        </div>
                        <div style={{ marginTop: "-4rem" }}>
                            <p style={{ color: "#6bb98b", fontSize: "1rem" }}>Incentivised Memecoin Trading Experience</p>
                        </div>
                        <div style={{ marginTop: "-2rem" }}>
                            <p style={{ color: "#b3eaaf", fontSize: "2rem" }}>To Be Announced...</p>
                        </div>
                        <div style={{ marginTop: "0.2rem", paddingBottom: "4rem", display: "flex" }}>
                            <Button className="button_intro" style={{ background: "#213840", paddingTop: "1rem", paddingBottom: "1rem", width: "35%", fontSize: "0.7rem", borderRadius: "20px", textTransform: "none" }}>Contact Us</Button>
                            <Button className="button_intro" style={{ background: "#213840", paddingTop: "1rem", paddingBottom: "1rem", width: "25%", marginLeft: "30%", fontSize: "0.7rem", borderRadius: "20px", textTransform: "none" }}>Docs</Button>
                        </div>
                    </div>
                </div>
                <div style={{ position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)", width: "100%", textAlign: "center" }}>
    <img src={mobileMascot} style={{ maxWidth: "55%", maxHeight: "55%", height: "auto", width: "auto" }} alt="" />
</div>

            </div>
        </div>
    )
}
function useOrientation() {
    const [orientation, setOrientation] = useState(window.screen.orientation.type);

    useEffect(() => {
        const handleOrientationChange = () => {
            setOrientation(window.screen.orientation.type);
        };

        window.screen.orientation.addEventListener("change", handleOrientationChange);

        return () => {
            window.screen.orientation.removeEventListener("change", handleOrientationChange);
        };
    }, []);

    return orientation;
}
export default App;
