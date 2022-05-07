import React, { useState } from "react";
import App from "./App";
import RoutedApp from './RoutedApp';

const modalStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.2)",
    color: "##FFF",
    zIndex: "9999", 
  };

const AuthedRoute = () => {
    const [pin, setPin] = useState("");
  return (
    <div>
        {pin === "9323" ? <RoutedApp/> 
        : 
        <div>
            <App />
            <div style={modalStyle} className="modal" >
            <div  style={{width: "100%", height:"100%", position:"absolute", zIndex: "-1"}}></div>
            <div className="contact-info" style={{zIndex:"1000"}}>
            <h1>EnterPin</h1>
            <input type="text" className="pin-input" onChange={(e)=>setPin(e.target.value)}/>
            </div>
            </div>
        </div>}
    </div>
  );
};

export default AuthedRoute;
