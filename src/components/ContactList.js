import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  return (
    <div>
      <ContactCard contacts={props.contacts} />
    </div>
  );
};

export default ContactList;
