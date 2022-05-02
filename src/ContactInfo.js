import React, {useState, useEffect} from "react";
import { useParams, Outlet, useNavigate  } from "react-router-dom";
import Modal from 'react-modal';
import { useSwipeable, UP, DOWN, SwipeEventData } from 'react-swipeable';
import { getDatabase, ref, child, get } from "firebase/database";



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
  

const ContactInfo = () => {
    let params = useParams();
    const [contacts , setContacts] = useState([]);
    const [contact, setContact] = useState([]);
    const [cl, setCl] = useState(null);
    
    const navigate = useNavigate();
   const currContact = parseInt(params.id);
    //get contacts from firebase and set contact to the one that matches the id
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, "contacts")).then((snapshot) => {
              if (snapshot.exists()) {
                setContacts(snapshot.val());
                setContact(snapshot.child(`${currContact}`).val());
                setCl(snapshot.val().length);
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            }
        );
    }, []);
    console.log(cl);

  
  
  
    const handleSwipe = (event: SwipeEventData) => {
    if (event.dir === DOWN) {
        navigate(`/`);
    }
    };
    const swipeable = useSwipeable({
        onSwipedLeft: () => {
            setContact(contacts[currContact]);
            
            setContact(contacts[params.id]);
            if (currContact === cl - 1) {
                navigate(`/${0}`);
            }else{
                let np =  currContact + 1;
                navigate(`/${np}`);
            }
        },
        onSwipedRight: () => {  
            setContact(contacts[currContact]);
           
            if (currContact === 0) {
                navigate(`/${cl-1}`);
            }else{
                let np = currContact - 1;
                navigate(`/${np}`);
            }
            
        },
        //on Swipe Up make a phone call
        onSwipedUp: () => {
            window.open(`tel:${contact.number}`);
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
        <p>Name: {contact.name}</p>
        <p>Work: {contact.work}</p>
        <p>Number:<a href={`tel:${contact.number}`}> {contact.number}</a></p>
        </div>
        </div>
    );
    }
export default ContactInfo;
