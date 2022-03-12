import { useState } from "react";

const AddContactFunc = (props) => {
  // const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    props.contactsData(e.target[0].value, e.target[1].value);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={submitHandler}>
        <div className="filed">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="name" placeholder="Email" />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContactFunc;
