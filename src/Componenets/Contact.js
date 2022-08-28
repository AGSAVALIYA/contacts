import React from "react";
import { Link , Route, useNavigate} from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ContactInfo from "./ContactInfo";


const Contact = ({name, number, id, work}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const Call = () => {
    window.location.href = `tel:${number}`;
  };
  return (
    <div className="contact" onClick={()=>{navigate(`/${id}`)}}>
      <div style={{marginRight: "15px"}}>
      <p> Name:<span style={{fontWeight: "600"}}> {name} </span></p>
      </div>
      <div>
      <p>Number:<span style={{fontWeight: "600"}}> {number} </span></p>
      <p>Work:<span style={{fontWeight: "500"}}> {work} </span></p>
      </div>
      
    </div>
  );
};

export default Contact;