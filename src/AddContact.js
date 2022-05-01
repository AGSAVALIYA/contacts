import React from "react";
import Popup from "reactjs-popup";
import app from "./firebase";
import { getDatabase, ref, child, push, update, set } from "firebase/database";

const AddContact = () => {
    const [name, setName] = React.useState("");
    const [work, setWork] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [contacts, setContacts] = React.useState([]);
    
   
  //add object to firebase
  // const addContact = () => {
  //   const dbRef = ref(getDatabase());
  //   push(child(dbRef, "contacts"), {
  //     name: name,
  //     work: work,
  //     number: number,
  //     location: location
  //   }).then(() => {
  //     console.log("Contact added");
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // };


    

   

    
  return (
    <div >
      <Popup trigger={<button className="add-contact">ADD</button>} position="left center">
        <div>
            <h1>Add Contact</h1>
            <form >
                <label>Name</label>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
                <label>Work</label>
                <input type="text" name="work" onChange={(e)=>setWork(e.target.value)}/>
                <label>Number</label>
                <input type="text" name="number" onChange={(e)=>setNumber(e.target.value)}/>
                <label>Location</label>
                <input type="text" name="location" onChange={(e)=>setLocation(e.target.value)}/>
                <button >Submit</button>
            </form>    
        </div>
      </Popup>
    </div>
  );
};

export default AddContact;
