import React from "react";
import { Link , Route, useNavigate} from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ContactEdit from "./ContactInfo";


const Contact = ({name, work, id, location}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div className="contact" onClick={()=>{navigate(`/${id}`)}}>
      <div style={{marginRight: "15px"}}>
      <p> Name:<span style={{fontWeight: "600"}}> {name} </span></p>
      </div>
      <div>
      <p>Work:<span style={{fontWeight: "600"}}> {work} </span></p>
      <p>Location:<span style={{fontWeight: "600"}}> {location} </span></p>
      </div>
      
    </div>
  );
};

export default Contact;