import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.id.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="none">
          <h1 className="white-text text-white">Sign In</h1>
          <div className="input-field">
            <input
              type="email"
              autoComplete="user email"
              id="email"
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              autoComplete="current-password"
              id="password"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Login</button>
            <div className="red-text center" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
