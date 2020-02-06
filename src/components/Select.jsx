import React from "react";

const Select = props => (
  // <div className="container">

  <div className="form-group">
    {console.log(props)}
    <label className="col-form-label">{props.title}</label>
    <select
      //   name={props.name}
      value={props.selectedOption}
      onChange={props.controlFunc}
      className="form-control form-control-sm mb-2 mr-sm-2"
      required
    >
      <option>{props.placeholder}</option>
      {props.options.map(opt => {
        return (
          <option key={opt.id} disabled={opt.isDisabled} value={opt.type}>
            {opt.type}
            {console.log("select ..." + props.selectedOption)}
          </option>
        );
      })}
    </select>
  </div>
  // </div>
);

export default Select;
