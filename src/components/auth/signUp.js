import React, { Component } from "react";

class SignUp extends Component {
  state = {
    emailAdress: "",
    Password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    companyName: ""
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="none">
          <h1 className="white-text text-white">Sign Up</h1>
          <div className="input-field">
            <label htmlFor="emailAdress">Email Adress</label>
            <input type="text" id="emailAdress" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Password">Password</label>
            <input type="text" id="Password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firsName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input type="text" id="dateOfBirth" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="phone number">Phone number</label>
            <input type="text" id="phone number" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="companyName">Company name</label>
            <input type="text" id="companyName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
