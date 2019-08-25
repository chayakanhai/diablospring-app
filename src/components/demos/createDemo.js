import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { createDemo } from "../../store/actions/demoActions";
import { Redirect } from "react-router-dom";

// heet Drop demo in navbar
class CreateDemo extends Component {
  state = {
    artistName: "",
    demoTitle: "",
    musicUrlBrowser: "",
    personalMessage: ""
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createDemo(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="signin" />;
    //const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="none">
          <h1 className="white-text text-white"> DROP YOUR DEMO HERE! </h1>
          <div className="input-field">
            <label htmlFor="artistName"> Artist Name </label>
            <input type="text" id="artistName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="demoTitle"> Demo Title </label>
            <input type="text" id="demoTitle" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="musicUrlBrowser"> Music URL / Browser </label>
            <input
              type="text"
              id="musicUrlBrowser"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="personalMessage"> Personal Message </label>
            <input
              type="text"
              id="personalMessage"
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <div className="col s6 offset-s3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <Dropzone
                    onDrop={acceptedFiles => console.log(acceptedFiles)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop your demo file here, or click to
                            select files
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </div>
              </div>
            </div>
          </div>
          <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">Submit Demo</button>
            <div className="red-text center" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDemo: demo => dispatch(createDemo(demo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDemo);
