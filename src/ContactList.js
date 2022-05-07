import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import Contact from "./Contact";
import App from './App';

const ContactList = ({CL}) => {
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="contact-list"
        columnClassName="contact-list-column"
      >
        {CL}
      </Masonry>
  );
};

export default ContactList;
