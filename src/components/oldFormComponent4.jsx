import React, { Component } from "react";
class FormComponent4 extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    console.log(this.props.values.projectName);
    return (
      <>
        <form
          className="w-50 bg-light text-dark col-lg-6 offset-lg-3"
          validate="true"
          onSubmit={this.props.handleFormSubmit}
          noValidate
        >
          <h2>
            <b>Infrastructure Configuration Summary</b>
          </h2>
          <br />
          {this.props.values.projectName && (
            <div>
              Project Name : <b>{this.props.values.projectName}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.projectSelection && (
            <div>
              Project Type :<b>{this.props.values.projectSelection}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.infraSelection && (
            <div>
              Environment :<b>{this.props.values.infraSelection}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.TemplateSelectedOptionGcp && (
            <div>
              Template :<b>{this.props.values.TemplateSelectedOptionGcp}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.TemplateSelectedOptionAws && (
            <div>
              Template :<b>{this.props.values.TemplateSelectedOptionAws}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.SourceProviderSelectionGcp && (
            <div>
              Source Provider :
              <b>{this.props.values.SourceProviderSelectionGcp}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.SourceProviderSelectionAws && (
            <div>
              Source Provider :
              <b>{this.props.values.SourceProviderSelectionAws}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.TemplateUrlS3 && (
            <div>
              Template URL :<b>{this.props.values.TemplateUrlS3}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.TemplateUrlGcp && (
            <div>
              Template URL :<b>{this.props.values.TemplateUrlGcp}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.urlName && (
            <div>
              Source code URL :<b>{this.props.values.urlName}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.branchName && (
            <div>
              Source Code Branch :<b>{this.props.values.branchName}</b>
              <br />
              <br />
            </div>
          )}

          {this.props.values.userName && (
            <div>
              <h2>Source Provider Credentials</h2>
              Username :<b>{this.props.values.userName}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.passWord && (
            <div>
              Password :<b>{this.props.values.passWord}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.email && (
            <div>
              Qemail Id :<b>{this.props.values.email}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.values.SelectedOptions && (
            <div>
              Security Setup :<b>{this.props.values.SelectedOptions}</b> <br />
              <b>Infrastructure Security Check</b>
              <br />
              <b>Data Security Check </b>
              <br />
              <b> Network Security Check</b> <br />
              <br />
            </div>
          )}
          {this.props.values.workFlowSelectedOptions && (
            <div>
              Workflow Options :
              <b>{this.props.values.workFlowSelectedOptions}</b>
              <br />
              <br />
              Monitoring Options :
              <b>{this.props.values.MonitoringOptionSelection}</b>
            </div>
          )}
          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight">
              {/* <button className="btn btn-success" onClick={this.continue}>
                Review & Submit */}
              <input
                type="submit"
                className="btn btn-success"
                value=" Review & Submit"
              />
              {/* </div> */}
              {/* </button> */}
            </div>
            <div className="p-2 bd-highlight">
              <button className="btn btn-primary" onClick={this.back}>
                « Back
              </button>
            </div>
          </div>
          <br />
        </form>
      </>
    );
  }
}

export default FormComponent4;
