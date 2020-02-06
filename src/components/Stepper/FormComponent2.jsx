import React, { Component } from "react";

class FormComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AvailableOptions: [
        {
          isDisabled: "",
          id: 1,
          inf: "Infrastructure Security check",
          checked: "checked"
        },
        {
          isDisabled: "disabled",
          id: 2,
          inf: "Code Quality Check",
          checked: ""
        },
        {
          isDisabled: "disabled",
          id: 3,
          inf: "Application Security Check",
          checked: ""
        },
        {
          isDisabled: "",
          id: 4,
          inf: "Data Security Check",
          checked: "checked"
        },
        {
          isDisabled: "",
          id: 5,
          inf: "Network Security Check",
          checked: "checked"
        }
      ],
      SelectedOptions: []
    };
  }

  componentWillUnmount() {
    this.props.saveData(2, this.state);
  }
  componentDidMount() {
    this.setState({ SelectedOptions: this.props.SelectedOptions });
  }
  handleClearForm2(e) {
    e.preventDefault();
    this.setState({ SelectedOptions: [] });
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
          <h2>
            <center>
              <b> Security Setup </b>{" "}
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
              <b> Security Setup </b> &nbsp;{" "}
            </label>{" "}
            <br />
            <br />
            <div className="form-check">
              {" "}
              {this.state.AvailableOptions.map(opt => {
                return (
                  <>
                    <br />
                    <label key={opt.id} className="form-check-label">
                      <input
                        value={opt.inf}
                        // checked={
                        //   this.state.SelectedOptions.toString().indexOf(
                        //     opt.inf
                        //   ) > -1
                        // }
                        checked={opt.checked}
                        onChange={e => {
                          let newSelection = e.target.value;
                          let newSelectionArray;
                          if (
                            this.state.SelectedOptions.indexOf(e.target.value) >
                            -1
                          ) {
                            newSelectionArray = [
                              this.state.SelectedOptions.filter(
                                s => s !== newSelection
                              )
                            ];
                          } else {
                            newSelectionArray = [
                              ...this.state.SelectedOptions,
                              newSelection
                            ];
                          }
                          this.setState({
                            SelectedOptions: newSelectionArray
                          });
                        }}
                        type="checkbox"
                        key={opt.id}
                        disabled={opt.isDisabled}
                      />{" "}
                      &nbsp; {opt.inf}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                      <br />
                      <br />
                    </label>{" "}
                  </>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          <div className="d-flex justify-content-between ml-4 mb-3">
            <button
              type="button"
              onClick={this.handleClearForm2.bind(this)}
              className="btn btn-outline-warning"
            >
              Reset
            </button>
          </div>
        </form>{" "}
      </>
    );
  }
}
{
  /* <label>lastName</label>
                  <input type="text" onKeyUp={(e) => {
                      this.setState({
                          firstName: e.target.value
                      })
                  }} />
                  <button onClick={() => { this.props.saveData(this.state.firstName) }}>Next</button>
              </div> */
}

export default FormComponent2;

// saveData(test1) {
//   console.log("from child", test1)
//   let stateTest = [
//     ...this.state.test
//   ]
//   console.log("tmp", stateTest)
//   stateTest.push(test1)
//   this.setState({
//     test: [
//       ...this.state.test,
//       test: stateTest
//     ]
//   })

//   console.log("in parent", this.state.test)
// }
