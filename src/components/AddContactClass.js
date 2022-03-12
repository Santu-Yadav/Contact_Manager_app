import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  render(props) {
    console.log("props#", props);
    const submitHandler = (e) => {
      e.preventDefault();
      // console.log("display ## ", e.target[0].value, e.target[1].value);
      this.setState({ name: e.target[0].value, email: e.target[1].value });
      props.contactsData(this.state.name, this.state.email);
    };

    // props.contactsData(this.state.name, this.state.email);

    // console.log("this.state ##", this.state.name, this.state.email);
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
  }
}

export default AddContact;
