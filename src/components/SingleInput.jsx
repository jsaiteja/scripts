import React from "react";

const SingleInput = props => (
  // <div className="container">
  <div className="form-group ">
    <label className="col-form-label">{props.title}</label>
    <input
      className="form-control mb-2 mr-sm-2"
      //   name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      required
    />
  </div>
  // {/* <div className="invalid-tooltip">Please provide a valid {props.title}.</div> */}
  // </div>
);

export default SingleInput;
