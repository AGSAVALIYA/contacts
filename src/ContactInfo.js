import React from "react";
import { useParams, Outlet, useNavigate  } from "react-router-dom";
import contacts from "./contacts";
import Modal from 'react-modal';
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';


function getContacts(id) {
    return contacts.find(contact => contact.id === id);
  }
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
  

const ContactEdit = () => {
    let params = useParams();
    let contact = getContacts(parseInt(params.id));
    const navigate = useNavigate();
    /* jshint ignore:start */
   const handleSwipe = (event: SwipeEventData) => {

    if (event.dir === DOWN) {
        navigate(`/`);
    }
    };
    /* jshint ignore:end */
    const numm = contacts.length;
    console.log(numm);
    const swipeable = useSwipeable({
        onSwipedLeft: () => {
            navigate(`/${contact.id + 1}`);
            if (contact.id === numm) {
                navigate(`/${1}`);
            }
        },
        onSwipedRight: () => {  
            navigate(`/${contact.id - 1}`);
            if (contact.id === 1) {
                navigate(`/${numm}`);
            }
            
        },
        preventDefaultTouchmoveEvent: false,
        trackMouse: true,
        trackTouch: true,
    });

    return (
       <div style={modalStyle} className="modal" {...swipeable}>
        <div  style={{width: "100%", height:"100%", position:"absolute", zIndex: "-1"}}   onClick={()=>{navigate("/")}}></div>   
<div className="contact-info" style={{zIndex:"1000"}}>
        <h1>Contact Info</h1>
        <p>Contact ID: {params.id}</p>
        <p>Name: {contact.name}</p>
        <p>Work: {contact.work}</p>
        <p>Number:<a href={`tel:${contact.number}`}> {contact.number}</a></p>
        </div>
        </div>
    );
    }
export default ContactEdit;
