import React from "react";

const TextAreaC = props => (
  <div className="form-group">
    <label className="col-form-label">{props.title}</label>
    <textarea
      className="form-control mb-2 mr-sm-2"
      style={props.resize ? null : { resize: "none" }}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      required
    />
  </div>
);
export default TextAreaC;
