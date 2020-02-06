import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { resData } from "./FormComponent4";
class FormComponent5 extends Component {
  constructor(props) {
    super(props);

    console.log("state printing in 5", props);
  }
  render() {
    // const {} = this.props;
    return (
      <>
        <form
          className="w-75 bg-light text-dark offset-lg-1"
          validate="true"
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
          <br />
          <div style={{ marginLeft: "260px" }}>
            <h2>Your Request ID is {this.props.requestId}</h2>

            <p>
              Provisioned infrastructure details will be sent to &nbsp; &nbsp;
              <b>{this.props.email}</b>
            </p>
            <div style={{ display: "inline-block" }}>
              <p>Monitor JIRA Workflow : </p>

              <a
                href={this.props.jiraUrl.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
              <br />
              <br />
            </div>

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
          </div>
        </form>
      </>
    );
  }
}

export default FormComponent5;
