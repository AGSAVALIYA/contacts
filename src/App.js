
import './App.css';
import ContactList from './ContactList';
import Contact from "./Contact";
import contacts from "./contacts";

import GoogleSheetsProvider from 'react-db-google-sheets';
import {useState} from "react";

function App() {
  const [search, setSearch] = useState("");
  // const CL = contacts.map((contact) => (
  //   <Contact key={contact.id} {...contact} />
  // ));
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
    </div>
  );
}

export default App;
