import React, { Component } from "react";
import Dropzone from "react-dropzone";

// heet Drop demo in navbar
class CreateDemo extends Component {
  state = {
    artistName: "",
    songName: "",
    musicUrlBrowser: "",
    personalMessage: ""
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
          <h1 className="white-text text-white"> DROP YOUR DEMO HERE! </h1>
          <div className="input-field">
            <label htmlFor="artistName"> Artist name </label>
            <input
              type="artistName"
              id="artistName"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="songName"> Song name </label>
            <input type="songName" id="songName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="musicUrlBrowser"> Music URL / Browser </label>
            <input
              type="musicUrlBrowser"
              id="musicUrlBrowser"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="personalMessage"> Personal Message </label>
            <input
              type="personalMessage"
              id="personalMessage"
              onChange={this.handleChange}
            />
          </div>
          <div class="row">
            <div class="col s6 offset-s3">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
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

export default CreateDemo;
