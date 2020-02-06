import React, { Component, Suspense } from "react";
import axios from "axios";
import "./stepper.css";
import FormComponent1 from "./FormComponent1";
import FormComponent2 from "./FormComponent2";
import FormComponent3 from "./FormComponent3";
import FormComponent4 from "./FormComponent4";
import FormComponent5 from "./FormComponent5";

// const MultiStep = React.lazy(() => import("react-multistep"));
const MultiStep = React.lazy(() => import("./Multistep"));

const fallback = params => {
  return <div> fallback </div>;
};

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepid: 1,
      step1: {
        folderNameGitTerraformGcp: "",
        folderNameGitTerraformAws: "",
        templateNameGitCft: "",
        folderNameGitDM: "",
        mainTemplateNameGitDM: "",
        mainTemplateNameDMCS: "",
        projectName: "",
        projectTypes: [
          { type: "AI / ML", isDisabled: "", id: 1 },
          { type: "Software Development", isDisabled: "disabled", id: 2 },
          { type: "Platform", isDisabled: "disabled", id: 3 },
          { type: "Data Lake", isDisabled: "disabled", id: 4 }
        ],
        DeploymentEnvironments: [
          { type: "Dev", isDisabled: "", id: 1 },
          { type: "Test", isDisabled: "", id: 2 },
          { type: "Prod", isDisabled: "", id: 3 }
        ],
        DeploymentEnvironmentSelection: "",
        projectSelection: "",
        hidden: "true",
        hidden1: "true",
        hidden2: "true",
        urlName: "",
        branchName: "",
        userName: "",
        passWord: "",
        infraOptions: [
          { isDisabled: "", id: 1, inf: "GCP" },
          { isDisabled: "", id: 2, inf: "AWS" },
          { isDisabled: "disabled", id: 3, inf: "Azure" }
        ],
        infraSelection: "",
        accountGcpOptions: [
          { isDisabled: "", id: 1, inf: "Driveboard" },
          { isDisabled: "disabled", id: 2, inf: "Personal" }
        ],
        accountAwsOptions: [
          { isDisabled: "", id: 1, inf: "Driveboard" },
          { isDisabled: "disabled", id: 2, inf: "Personal" }
        ],
        accountGcpSelection: "",
        accountAwsSelection: "",
        ProjectNamePersonalaccGcp: "",
        ProjectIDGcp: "",
        ServiceAccountGcp: "",
        JsonKey: null,
        selectedFile: null,
        loaded: 0,
        loaded1: 0,
        email: "",
        AccountIdAws: "",
        AccessKeyAws: "",
        SecretAccessKeyAws: "",
        TemplateOptionsGcp: [
          { isDisabled: "", id: 1, inf: "Deployment Manager" },
          { isDisabled: "", id: 2, inf: "Terraform" }
        ],
        TemplateSelectedOptionGcp: "",
        TerraformOptionsGcp: [
          { isDisabled: "", id: 1, inf: "Manual Upload" },
          { isDisabled: "disabled", id: 2, inf: "Terraform Generator" }
        ],
        TerraformSelectedOptionGcp: "",
        TemplateOptionsAws: [
          { isDisabled: "", id: 1, inf: "Cloud Formation" },
          { isDisabled: "", id: 2, inf: "Terraform" }
        ],
        TerraformOptionsAws: [
          { isDisabled: "", id: 1, inf: "Manual Upload" },
          { isDisabled: "disabled", id: 2, inf: "Terraform Generator" }
        ],
        TerraformSelectedOptionAws: "",
        TemplateSelectedOptionAws: "",
        SourceProvidersGcp: [
          { isDisabled: "", id: 1, inf: "Git" },
          { isDisabled: "", id: 2, inf: "Cloud Storage" },
          { isDisabled: "", id: 3, inf: "Local" }
        ],
        SourceProviderSelectionGcp: "",
        SourceProvidersAws: [
          { isDisabled: "", id: 1, inf: "Git" },
          { isDisabled: "", id: 2, inf: "S3" },
          { isDisabled: "", id: 3, inf: "Local" }
        ],
        SourceProviderSelectionAws: "",
        TemplateUrlS3: "",
        TemplateUrlGcp: ""
      },
      step2: {
        stepid: 2,
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
      },
      step3: {
        stepid: 3,
        workFlowOptions: [
          { isDisabled: "", id: 1, inf: "Logging", ischecked: "checked" },
          { isDisabled: "disabled", id: 2, inf: "Monitoring", ischecked: "" },
          {
            isDisabled: "",
            id: 3,
            inf: "Integration with JIRA",
            ischecked: ""
          },
          {
            isDisabled: "disabled",
            id: 4,
            inf: "Git Provisioning",
            ischecked: ""
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
          { isDisabled: "", id: 2, inf: "Create a new JIRA project" }
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
      },
      step4: {
        stepid: 4,
        jiraUrl: "",
        requestId: "",
        prjKey: ""
      }
    };
    // this.handleClearForm1 = this.handleClearForm1.bind(this);
  }

  // componentDidMount() {
  //   this.state.step1 = JSON.parse(localStorage.getItem("step1"));

  //   if (localStorage.getItem("step1")) {
  //     this.setState({
  //       projectName: this.state.step1.projectName
  //     });
  //   } else {
  //     this.setState({
  //       projectName: ""
  //     });
  //   }
  // }
  // getInitialState() {
  //   let step1 = localStorage.getItem("step1") || 1;
  //   let step2 = localStorage.getItem("step2") || 1;
  //   let step3 = localStorage.getItem("step3") || 1;

  //   return {
  //     step1: step1,
  //     step2: step2,
  //     step3: step3
  //   };
  // }

  // setSteps() {
  //   localStorage.setItem("step1", this.state.step1);
  //   localStorage.setItem("step2", this.state.step2);
  //   localStorage.setItem("step3", this.state.step3);
  //   this.setState({
  //     step1: this.state.step1,
  //     step2: this.state.step2,
  //     step3: this.state.step3
  //   });
  // }

  saveStepData(id, data) {
    console.log("data ...from step", id, "   ", data);
    switch (id) {
      case 1:
        this.setState({ step1: data, stepid: 1 });
        break;
      case 2:
        this.setState({ step2: data, stepid: 2 });
        break;
      case 3:
        this.setState({ step3: data, stepid: 3 });
        break;
      case 4:
        this.setState({ step4: data, stepid: 4 });
        break;
    }
  }
  getInitialState(stepid) {
    if (stepid === 1) {
      return {
        folderNameGitTerraformAws: "",
        folderNameGitTerraformGcp: "",
        templateNameGitCft: "",
        folderNameGitDM: "",
        mainTemplateNameGitDM: "",
        mainTemplateNameDMCS: "",
        projectName: "",
        DeploymentEnvironmentSelection: "",
        projectSelection: "",
        hidden: "true",
        hidden1: "true",
        hidden2: "true",
        urlName: "",
        branchName: "",
        userName: "",
        passWord: "",
        infraSelection: "",
        accountGcpSelection: "",
        accountAwsSelection: "",
        ProjectNamePersonalaccGcp: "",
        ProjectIDGcp: "",
        ServiceAccountGcp: "",
        JsonKey: null,
        selectedFile: null,
        loaded: 0,
        loaded1: 0,
        email: "",
        AccountIdAws: "",
        AccessKeyAws: "",
        SecretAccessKeyAws: "",
        TemplateSelectedOptionGcp: "",
        TemplateSelectedOptionAws: "",
        SourceProviderSelectionGcp: "",
        SourceProviderSelectionAws: "",
        TemplateUrlS3: "",
        TemplateUrlGcp: "",
        TerraformSelectedOptionGcp: "",
        TerraformSelectedOptionAws: ""
      };
    }
  }

  // handleClearForm = id => {
  //   console.log("id is ", id);
  //   switch (id) {
  //     case 1:
  //       this.setState({ step1: this.getInitialState(1) });
  //       return 1;
  //     break;
  //     case 2:
  //       this.setState({ step2: this.getInitialState(2) });
  //       return 2;
  //     break;
  //   }
  // };

  // handleClearForm1 = e => {
  //   e.preventDefault();

  //   // let id = this.handleClearForm();
  //   // console.log("In reset ", id);
  // };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center"> Loading... </div>
  );

  render() {
    const steps = [
      {
        name: "Configuration",
        component: (
          <FormComponent1
            saveData={this.saveStepData.bind(this)}
            // clearForm={this.handleClearForm.bind(this)}
            {...this.state.step1}
          />
        )
      },
      {
        name: "Security setup",
        component: (
          <FormComponent2
            saveData={this.saveStepData.bind(this)}
            {...this.state.step2}
          />
        )
      },
      {
        name: "Workflow monitoring",
        component: (
          <FormComponent3
            saveData={this.saveStepData.bind(this)}
            {...this.state.step3}
          />
        )
      },
      {
        name: "Provisioning",
        component: (
          <FormComponent4
            saveData={this.saveStepData.bind(this)}
            {...this.state}
          />
        )
      },
      {
        name: "Thank You",
        component: <FormComponent5 {...this.state.step4} />
      }
    ];
    return (
      <div>
        <Suspense fallback={this.loading()}>
          <MultiStep showNavigation={true} steps={steps} />
          {/* <button
            type="button"
            onClick={this.handleClearForm1.bind(this)}
            className="btn btn-outline-warning"
          >
            Reset
          </button> */}
          {/* {this.state.stepid} */}
        </Suspense>
      </div>
    );
  }
}

export default Stepper;

// test:

// {
//   projectName: "",
//   projectTypes: [{
//       type: "AI / ML",
//       isDisabled: "",
//       id: 1
//     },
//     {
//       type: "Software Development",
//       isDisabled: "disabled",
//       id: 2
//     },
//     {
//       type: "Platform",
//       isDisabled: "disabled",
//       id: 3
//     },
//     {
//       type: "Data Lake",
//       isDisabled: "disabled",
//       id: 4
//     }
//   ],
//   DeploymentEnvironments: [{
//       type: "Dev",
//       isDisabled: "",
//       id: 1
//     },
//     {
//       type: "Test",
//       isDisabled: "",
//       id: 2
//     },
//     {
//       type: "Prod",
//       isDisabled: "",
//       id: 3
//     },
//   ],
//   DeploymentEnvironmentSelection: "",

//   projectSelection: "",
//   urlName: "",
//   branchName: "",
//   userName: "",
//   passWord: "",
//   infraOptions: [{
//       isDisabled: "",
//       id: 1,
//       inf: "GCP"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "AWS"
//     },
//     {
//       isDisabled: "disabled",
//       id: 3,
//       inf: "azure"
//     }
//   ],
//   infraSelection: "",
//   accountGcpOptions: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Driveboard"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Personal"
//     }
//   ],
//   accountAwsOptions: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Driveboard"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Personal"
//     }
//   ],
//   accountGcpSelection: "",
//   accountAwsSelection: "",
//   ProjectNamePersonalaccGcp: "",
//   ProjectIDGcp: "",
//   ServiceAccountGcp: "",
//   hidden: "true",
//   hidden1: "true",
//   hidden2: "true",
//   JsonKey: null,
//   selectedFile: null,
//   email: "",
//   AccountIdAws: "",
//   AccessKeyAws: "",
//   SecretAccessKeyAws: "",
//   AvailableOptions: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Infrastructure Security check"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Monitoring and Reporting"
//     },
//     {
//       isDisabled: "",
//       id: 3,
//       inf: "Integration with JIRA"
//     },
//     {
//       isDisabled: "",
//       id: 4,
//       inf: "Compliance check "
//     }
//   ],
//   SelectedOptions: [],

//   TemplateOptionsGcp: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Deployment Manager"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Terraform"
//     }
//   ],
//   TemplateSelectedOptionGcp: "",
//   TemplateOptionsAws: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Cloud Formation"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Terraform"
//     }
//   ],
//   TemplateSelectedOptionAws: "",
//   SourceProvidersGcp: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Git"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "Cloud Storage"
//     },
//     {
//       isDisabled: "",
//       id: 3,
//       inf: "Local"
//     }
//   ],
//   SourceProviderSelectionGcp: "",
//   SourceProvidersAws: [{
//       isDisabled: "",
//       id: 1,
//       inf: "Git"
//     },
//     {
//       isDisabled: "",
//       id: 2,
//       inf: "S3"
//     },
//     {
//       isDisabled: "",
//       id: 3,
//       inf: "Local"
//     }
//   ],
//   SourceProviderSelectionAws: "",
//   TemplateUrlS3: "",
//   TemplateUrlGcp: ""
// },

// saveData(childId, test1) {
//   console.log("from child with id", childId, "  ", test1);
//   let stateTest = [
//     {
//       ...this.state.test
//     }
//   ];
//   console.log("tmp", stateTest);
//   stateTest.push(test1);
//   this.setState({
//     test: {
//       ...this.state.test,
//       test: stateTest
//     }
//   });
//   console.log("in parent", this.state.test);
//   // console.log("in parent", JSON.stringify(this.state.test));
// }

// displayData() {
//   if (this.state.test["test"][1])
//     return this.state.test["test"][1]["projectName"];
// }
