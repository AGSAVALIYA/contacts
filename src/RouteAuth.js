import React, { useState } from "react";
import { useEffect } from "react";
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
    const [loggedIn, setLoggedIn] = useState(false);
    const code = localStorage.getItem("code");
    const handlePin= (e) => {
        setPin(e.target.value);
    }
    useEffect(()=>{
        if(code === "9323"){
            setLoggedIn(true);
        }
    },[code])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin === "9323") {
            setLoggedIn(true);
            localStorage.setItem("code", pin);
        } else {
            setLoggedIn(false);
            console.log("Wrong pin");
        }
    }

  return (
    <div>
        {loggedIn ? <RoutedApp/> 
        : 
        <div>
            <App />
            <form>
            <div style={modalStyle} className="modal" >
            <div  style={{width: "100%", height:"100%", position:"absolute", zIndex: "-1"}}></div>
            <div className="contact-info" style={{zIndex:"1000"}}>
            <h1>EnterPin</h1>
            <input type="num" maxLength={4} className="pin-input" onChange={handlePin}/>
            <button className="pin-button" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            </form>
        </div>}
    </div>
  );
};

export default AuthedRoute;
