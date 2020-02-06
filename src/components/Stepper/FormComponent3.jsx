import React, { Component } from "react";

class FormComponent3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workFlowOptions: [
        { isDisabled: "", id: 1, inf: "Logging    ", ischecked: true },
        {
          isDisabled: "disabled",
          id: 2,
          inf: "Monitoring    ",
          ischecked: false
        },
        {
          isDisabled: "",
          id: 3,
          inf: "Integration with JIRA    ",
          ischecked: false
        },
        {
          isDisabled: "disabled",
          id: 4,
          inf: "Git Provisioning    ",
          ischecked: false
        }
      ],
      workFlowSelectedOptions: [],
      MonitoringOptions: [
        { isDisabled: "disabled", id: 1, inf: "Cloud Watch" },
        { isDisabled: "disabled", id: 2, inf: "Stack Driver" }
      ],
      MonitoringOptionSelection: "",
      JiraOptions: [
        {
          isDisabled: "disabled",
          id: 1,
          inf: "Add to an existing JIRA project"
        },
        { isDisabled: "", id: 2, inf: "Create a new JIRA project    " }
      ],
      JiraOptionSelection: "",
      JiraUserName: "",
      JiraPassword: "",
      hidden3: "true",
      GitOptions: [
        {
          isDisabled: "disabled",
          id: 1,
          inf: "Add an existing gitlab account"
        },
        { isDisabled: "disabled", id: 2, inf: "Create a new Gitlab Account" }
      ],
      GitSelection: ""
    };
  }

  componentWillUnmount() {
    this.props.saveData(3, this.state);
  }
  componentDidMount() {
    this.setState({
      workFlowSelectedOptions: this.props.workFlowSelectedOptions
    });
    this.setState({ JiraOptionSelection: this.props.JiraOptionSelection });
    this.setState({ JiraUserName: this.props.JiraUserName });
    this.setState({ JiraPassword: this.props.JiraPassword });
    this.setState({ hidden3: this.props.hidden3 });
    this.setState({ GitSelection: this.props.GitSelection });
    this.setState({
      MonitoringOptionSelection: this.props.MonitoringOptionSelection
    });
  }
  handleClearForm3(e) {
    e.preventDefault();
    this.setState({
      workFlowSelectedOptions: [],
      JiraOptionSelection: "",
      JiraUserName: "",
      JiraPassword: "",
      GitSelection: ""
    });
  }
  render() {
    return (
      <>
        <form
          className="w-75 bg-light text-dark offset-lg-1"
          validate="true"
          noValidate
          style={{
            marginTop: "50px"
          }}
        >
          <>
            <h2>
              <center>
                <b> Workflow Monitoring </b>{" "}
              </center>{" "}
            </h2>{" "}
            <div className="form-group">
              <label
                className="form-check-label"
                style={{
                  marginLeft: "10px",
                  marginRight: "18px"
                }}
              >
                {" "}
                <b> Workflow Options </b> &nbsp;{" "}
              </label>{" "}
              <br />
              <br />
              <div className="form-check">
                {" "}
                {this.state.workFlowOptions.map(opt => {
                  return (
                    <>
                      <br />
                      <div key={opt.id}>
                        <label key={opt.id} className="form-check-label">
                          <input
                            key={opt.id}
                            value={opt.inf}
                            checked={opt.ischecked}
                            // checked={
                            //   this.state.workFlowSelectedOptions
                            //     .toString()
                            //     .indexOf(opt.inf) > -1
                            // }
                            onChange={e => {
                              let newSelection = e.target.value;
                              let newSelectionArray;
                              if (
                                this.state.workFlowSelectedOptions.indexOf(
                                  e.target.value
                                ) > -1
                              ) {
                                newSelectionArray = [
                                  this.state.workFlowSelectedOptions.filter(
                                    s => s !== newSelection
                                  )
                                ];
                              } else {
                                newSelectionArray = [
                                  ...this.state.workFlowSelectedOptions,
                                  newSelection
                                ];
                              }
                              this.setState({
                                workFlowSelectedOptions: newSelectionArray
                              });
                            }}
                            type="checkbox"
                            disabled={opt.isDisabled}
                          />{" "}
                          &nbsp; {opt.inf}
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; <br />
                          <br />
                        </label>{" "}
                      </div>
                    </>
                  );
                })}{" "}
              </div>{" "}
            </div>{" "}
            {this.state.workFlowSelectedOptions.toString() ===
              "Monitoring    " && (
              <div className="form-group">
                <label
                  className="form-check-label"
                  style={{ marginLeft: "30px", marginRight: "20px" }}
                >
                  <b> </b> &nbsp;
                </label>
                <div className="form-check-inline ">
                  {this.state.MonitoringOptions.map((opt, i) => {
                    return (
                      <label key={i} className="form-check-label">
                        <input
                          value={opt.inf}
                          // checked={
                          //   this.state.MonitoringOptionSelection.toString().indexOf(
                          //     opt.inf
                          //   ) > -1
                          // }
                          checked={opt.checked}
                          onChange={e => {
                            this.setState({
                              MonitoringOptionSelection: [e.target.value]
                            });
                          }}
                          type="radio"
                          key={opt.id}
                          disabled={opt.isDisabled}
                        />
                        &nbsp;
                        {opt.inf}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
            {this.state.workFlowSelectedOptions.toString() ===
              "Git Provisioning    " && (
              <div className="form-group">
                <label
                  className="form-check-label"
                  style={{ marginLeft: "30px", marginRight: "20px" }}
                >
                  <b> </b> &nbsp;
                </label>
                <div className="form-check-inline ">
                  {this.state.GitOptions.map((opt, i) => {
                    return (
                      <label key={i} className="form-check-label">
                        <input
                          value={opt.inf}
                          checked={
                            this.state.GitSelection.toString().indexOf(
                              opt.inf
                            ) > -1
                          }
                          onChange={e => {
                            this.setState({
                              GitSelection: [e.target.value]
                            });
                          }}
                          type="radio"
                          key={opt.id}
                          disabled={opt.isDisabled}
                        />
                        &nbsp;
                        {opt.inf}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
            {this.state.workFlowSelectedOptions.toString() ===
              "Integration with JIRA    " && (
              <div className="form-group">
                <label
                  className="form-check-label"
                  style={{ marginLeft: "30px", marginRight: "20px" }}
                >
                  <b> </b> &nbsp;
                </label>
                <div className="form-check-inline ">
                  {this.state.JiraOptions.map((opt, i) => {
                    return (
                      <label key={i} className="form-check-label">
                        <input
                          value={opt.inf}
                          checked={
                            this.state.JiraOptionSelection.toString().indexOf(
                              opt.inf
                            ) > -1
                          }
                          onChange={e => {
                            this.setState({
                              JiraOptionSelection: [e.target.value]
                            });
                          }}
                          type="radio"
                          key={opt.id}
                          disabled={opt.isDisabled}
                        />
                        &nbsp;
                        {opt.inf}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp;&nbsp; &nbsp;
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
            {this.state.JiraOptionSelection.toString() ===
              "Create a new JIRA project    " && (
              <>
                <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "11px"
                  }}
                >
                  <div className="form-group ">
                    <label className="col-form-label required">
                      <b>Jira Username</b>
                    </label>

                    <input
                      className="form-control mb-2 mr-sm-2"
                      type="text"
                      onChange={e =>
                        this.setState({ JiraUserName: e.target.value })
                      }
                      placeholder="Enter Project Name"
                      required
                      value={this.state.JiraUserName}
                    />
                  </div>
                </div>

                <i
                  className="fa fa-info-circle fa-lg"
                  style={{ color: "black" }}
                  title="Description about Jira Username"
                ></i>

                <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "10px"
                  }}
                >
                  <div className="form-group ">
                    <label className="col-form-label required">
                      <b> Jira Password</b>
                    </label>
                    <input
                      className="form-control mb-2 mr-sm-2"
                      type={this.state.hidden3 ? "password" : "text"}
                      onChange={e => {
                        this.setState({
                          JiraPassword: e.target.value
                        });
                      }}
                      placeholder="Enter Jira Password "
                      value={this.state.JiraPassword}
                      required
                    />
                  </div>
                </div>

                {this.state.hidden3 && (
                  <span
                    onClick={() => {
                      this.setState({
                        hidden3: !this.state.hidden3
                      });
                    }}
                  >
                    <i className="fa fa-eye errspan"></i>
                  </span>
                )}

                {!this.state.hidden3 && (
                  <span
                    onClick={() => {
                      this.setState({
                        hidden3: !this.state.hidden3
                      });
                    }}
                  >
                    <i className="icon-eye-close errspan"></i>
                  </span>
                )}

                <div className="d-flex justify-content-between ml-4 mb-3">
                  <button
                    type="button"
                    onClick={this.handleClearForm3.bind(this)}
                    className="btn btn-outline-warning"
                  >
                    Reset
                  </button>
                </div>
              </>
            )}
          </>
        </form>
      </>
    );
  }
}

export default FormComponent3;
