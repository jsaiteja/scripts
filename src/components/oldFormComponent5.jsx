import React, { Component } from "react";
import { Link } from "react-router-dom";
class FormComponent5 extends Component {
  render() {
    // const {} = this.props;
    return (
      <>
        <form
          className="w-50 bg-light text-dark col-lg-6 offset-lg-3"
          validate="true"
          onSubmit={this.props.handleFormSubmit}
          noValidate
        >
          <h2>
            <center>
              <i className="fa fa-check clr"></i>

              <br />
              <b>THANK YOU</b>
            </center>
          </h2>
          <center>For submitting the request</center>
          <br />

          <p>
            We will be sending the provisioned infrastructure details through
            mail to <b>{this.props.values.email}</b>
          </p>

          <p>Monitor JIRA Workflow : </p>

          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Click Here
          </a>
          <br />
          <br />

          <center>
            <a
              className="nav-link mr-4"
              href="http://localhost:3000/"
              style={{ color: "blue" }}
            >
              Home Step
            </a>
          </center>
          <br />
          <br />
        </form>
      </>
    );
  }
}

export default FormComponent5;
