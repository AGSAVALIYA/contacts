import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import Contact from "./Contact";
import contacts from "./contacts";

const ContactList = ({CL}) => {
  
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <div className="contact-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {CL}
      </Masonry>
    </div>
  );
};

export default ContactList;
