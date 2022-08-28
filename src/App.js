import './App.css';
import ContactList from './ContactList';
import Contact from "./Componenets/Contact";
import {useEffect, useState} from "react";
import { Outlet } from 'react-router-dom';
import app from "./firebase/firebase";
import AddContact from './AddContact';
import { getDatabase, ref, child, get } from "firebase/database";



function App() {
  const [search, setSearch] = useState("");
  const [cl , setCl] = useState(null);
  const [contacts, setContacts] = useState([]);

 useEffect(() => {
   const dbRef = ref(getDatabase());
   get(child(dbRef, "contacts")).then((snapshot) => {
      if (snapshot.exists()) {
        setContacts(snapshot.val());
        setCl(parseInt(snapshot.val().length));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }
  );
  
  }, []);
  console.log("cl from app",cl);
  const CL = contacts.filter((contact) => {
    if (search === "") {
      return contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />))
    } else {
      return (contact.name.toLowerCase().includes(search.toLowerCase()) || contact.work.toLowerCase().includes(search.toLowerCase())) ? <Contact key={contact.id} {...contact} /> : null
    }
  }).map((contact) => (
    <Contact key={contact.id} {...contact} />
  ));

  return (
    <div>
      <input className="search-bar" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <ContactList CL={CL}/>
      <AddContact cl={cl}/>
      <Outlet/>
    </div>
  );
}

export default App;
