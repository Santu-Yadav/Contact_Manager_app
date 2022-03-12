import Header from "./Header";
// import AddContact from "./AddContactClass";
import AddContactFunc from "./AddContactsFunc";
import ContactList from "./ContactList";

import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const contactsData = (a, b) => {
    setContacts([...contacts, { name: a, email: b }]);
  };

  return (
    <div className="ui container">
      <Header />
      {/* <AddContact contactsData={contactsData} /> */}
      <AddContactFunc contactsData={contactsData} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
