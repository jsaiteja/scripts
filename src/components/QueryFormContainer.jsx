import React, { Component } from "react";
import TextAreaC from "../components/TextAreaC";
import SingleInput from "../components/SingleInput";
import axios from "axios";
class QueryFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        emailr: ""
      },
      QuserName: "",
      Qemail: "",
      description: ""
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleEmailIdChange = this.handleEmailIdChange.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  handleFormSubmit(e) {
    e.preventDefault();
    console.log("in submit");
    // if (!this.canBeSubmitted()) {
    //   e.preventDefault();
    //   return;
    // }
    // e.preventDefault();

    const formPayload = {
      QuserName: this.state.QuserName,
      Qemail: this.state.Qemail,
      description: this.state.description
    };

    console.log("Send this in a POST request:", formPayload);
    console.log(JSON.stringify(formPayload));
    axios
      .post(
        // `https://jsonplaceholder.typicode.com/users`,
        `http://35.237.232.109:8000/help/`,
        // { crossDomain: true },
        { formPayload }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    alert(
      "Query have been Submitted successfully ....................... Please wait for few minutes"
    );
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleUserNameChange(e) {
    this.setState({ QuserName: e.target.value });
  }
  handleEmailIdChange(e) {
    this.setState({ Qemail: e.target.value });
    console.log(this.state.Qemail);
    let errors = this.state.errors;
    errors.emailr = this.validEmailRegex.test(e.target.value)
      ? ""
      : "Email is not valid!";
    this.setState({ Qemail: e.target.value });
    this.setState({ errors, [e.target.name]: e.target.value });
  }
  // canBeSubmitted() {
  //   return (
  //     this.state.Qemail.length > 0 &&
  //     this.state.description.length > 0 &&
  //     this.state.QuserName.length > 0
  //   );
  // }

  render() {
    // const isEnabled = this.canBeSubmitted();
    return (
      <div className="container bg-light text-dark w-50 ml-6">
        <form
          className="form-group "
          validate="true"
          onSubmit={this.handleFormSubmit}
          style={{ marginTop: "55px" }}
        >
          <SingleInput
            inputType={"text"}
            title={"Quser Name : "}
            //   name={"name"}
            controlFunc={this.handleUserNameChange}
            content={this.state.QuserName}
            placeholder={" Enter user name"}
            required
          />
          <SingleInput
            inputType={"email"}
            title={"QEmail Id : "}
            //   name={"name"}
            controlFunc={this.handleEmailIdChange}
            content={this.state.Qemail}
            placeholder={"firstname.lastname@quantiphi.com"}
            required
            noValidate
          />
          {this.state.errors.emailr.length > 0 && (
            <span className="error">{this.state.errors.emailr}</span>
          )}

          <TextAreaC
            title={"Query Description."}
            rows={5}
            resize={false}
            content={this.state.description}
            name={""}
            controlFunc={this.handleDescriptionChange}
            placeholder={"Please be thorough in your descriptions"}
            required
          />
          {/* <center> */}
          <input
            type="submit"
            // disabled={!isEnabled}
            className="btn btn-outline-success"
            value="Submit"
          />
          {/* </center> */}
        </form>
      </div>
    );
  }
}

export default QueryFormContainer;
