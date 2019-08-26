import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    emailAdress: "",
    password: "",
    producerFirstName: "",
    producerLastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    country: "",
    companyName: ""
  };
  handleChange = e => {
    //const { id, value } = e.target;
    this.setState({
      //[id]: value
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    //console.log(e);
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="none">
          <h1 className="white-text text-white">Sign Up</h1>
          <div className="input-field">
            <label htmlFor="emailAdress">Email Adress</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Password">Password</label>
            <input type="text" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
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
            <input type="text" id="phoneNumber" onChange={this.handleChange} />
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

            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
