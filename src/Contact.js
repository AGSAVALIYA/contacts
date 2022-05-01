import React from "react";

const Contact = ({name, work, id}) => {
  return (
    <div className="contact">
      <div style={{marginRight: "15px"}}>
      <p> Name:<span style={{fontWeight: "600"}}> {name} </span></p>
      </div>
      <div>
      <p>Work:<span style={{fontWeight: "600"}}> {work} </span></p>
      <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default Contact;