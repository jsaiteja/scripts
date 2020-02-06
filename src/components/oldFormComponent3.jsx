import React, { Component } from "react";
import CheckboxOrRadioGroup from "../components/CheckboxOrRadioGroup";
class FormComponent3 extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    // const {} = this.props;
    return (
      <>
        <form
          className="w-50 bg-light text-dark col-lg-6 offset-lg-3"
          validate="true"
          noValidate
        >
          <h2>
            <center>
              <b>Workflow Monitoring</b>
            </center>
          </h2>
          <br />
          <br />
          <CheckboxOrRadioGroup
            title={""}
            controlFunc={this.props.handleWorkflowCheckSelectionChange}
            type={"checkbox"}
            options={this.props.values.workFlowOptions}
            selectedOptions={this.props.values.workFlowSelectedOptions}
          />
          {this.props.values.workFlowSelectedOptions.toString() ===
            "Monitoring" && (
            <div>
              {/* {"event in monitor"} */}
              <CheckboxOrRadioGroup
                title={""}
                controlFunc={this.props.handleMonitoringOptionSelection}
                type={"radio"}
                options={this.props.values.MonitoringOptions}
                selectedOptions={this.props.values.MonitoringOptionSelection}
              />
            </div>
          )}

          <div className="d-flex justify-content-between m-1">
            <button
              type="button"
              onClick={this.props.handleClearForm3}
              className="btn btn-outline-warning"
            >
              Reset
            </button>
            <button className="btn btn-primary" onClick={this.back}>
              « Back
            </button>

            <button className="btn btn-primary" onClick={this.continue}>
              Next »
            </button>
          </div>
          <br />
        </form>
      </>
    );
  }
}

export default FormComponent3;
