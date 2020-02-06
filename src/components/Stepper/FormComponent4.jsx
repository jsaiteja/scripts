import React, { Component } from "react";
import axios from "axios";
const MultiStep = React.lazy(() => import("./Multistep"));

class FormComponent4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jiraUrl: "",
      requestId: "",
      projectKey: this.props.step4.projectKey,
      email: this.props.step1.email
    };
  }
  // componentWillUnmount() {
  //   this.props.saveData(4, this.state);
  // }
  // componentDidMount() {
  //   this.setState({
  //     jiraUrl: this.state.jiraUrl,
  //     requestId: this.state.requestId,
  //     projectKey: this.state.projectKey
  //   });
  // }

  handleFormSubmit(e) {
    console.log("in form submit");

    e.preventDefault();
    // this.setState({ jiraUrl: "https://google.com" });
    // this.props.saveData(4, this.state);
    // document.getElementById("nextId1").click();

    // const formPayload1 = {
    //  projectName: this.props.step1.projectName,
    //projectSelection: this.props.step1.projectSelection,
     // DeploymentEnvironmentSelection: this.props.step1
       // .DeploymentEnvironmentSelection,
      //infraSelection: this.props.step1.infraSelection,
      //accountGcpSelection: this.props.step1.accountGcpSelection,
      //accountAwsSelection: this.props.step1.accountAwsSelection,
      //JsonKey: this.props.step1.JsonKey,
      //selectedFile: this.props.step1.selectedFile,
      //email: this.props.step1.email,
      //TemplateSelectedOptionGcp: this.props.step1.TemplateSelectedOptionGcp,
      //TemplateSelectedOptionAws: this.props.step1.TemplateSelectedOptionAws,
      //SourceProviderSelectionGcp: this.props.step1.SourceProviderSelectionGcp,
      //SourceProviderSelectionAws: this.props.step1.SourceProviderSelectionAws,
      //TemplateUrlS3: this.props.step1.TemplateUrlS3,
      //TemplateUrlGcp: this.props.step1.TemplateUrlGcp,
      //TerraformSelectedOptionGcp: this.props.step1.TerraformSelectedOptionGcp,
      //TerraformSelectedOptionAws: this.props.step1.TerraformSelectedOptionAws,
      //folderNameGitTerraformAws: this.props.step1.folderNameGitTerraformAws,
      //folderNameGitTerraformGcp: this.props.step1.folderNameGitTerraformGcp,
      //templateNameGitCft: this.props.step1.templateNameGitCft,
      //folderNameGitDM: this.props.step1.folderNameGitDM,
      //mainTemplateNameGitDM: this.props.step1.mainTemplateNameGitDM,
      //mainTemplateNameDMCS: this.props.step1.mainTemplateNameDMCS,
      //urlName: this.props.step1.urlName,
      //branchName: this.props.step1.branchName,
      //userName: this.props.step1.userName,
      //passWord: this.props.step1.passWord,
      // ProjectNamePersonalaccGcp:this.props.step1.ProjectNamePersonalaccGcp,
      // ProjectIDGcp:this.props.step1.ProjectIDGcp,
      // ServiceAccountGcp:this.props.step1.ServiceAccountGcp,
      // AccountIdAws:this.props.step1.AccountIdAws,
      // AccessKeyAws:this.props.step1.AccessKeyAws,
      // SecretAccessKeyAws:this.props.step1.SecretAccessKeyAws
      //SelectedOptions: this.props.step2.SelectedOptions,
      //workFlowSelectedOptions: this.props.step3.workFlowSelectedOptions,
      //JiraOptionSelection: this.props.step3.JiraOptionSelection,
      //JiraUserName: this.props.step3.JiraUserName,
      //JiraPassword: this.props.step3.JiraPassword
    //};
    
    const formPayload = {
      projectName: this.props.step1.projectName,
      projectSelection: this.props.step1.projectSelection,
      DeploymentEnvironmentSelection: this.props.step1
        .DeploymentEnvironmentSelection,
      infraSelection: this.props.step1.infraSelection,
      accountGcpSelection: this.props.step1.accountGcpSelection,
      accountAwsSelection: this.props.step1.accountAwsSelection,
      JsonKey: this.props.step1.JsonKey,
      selectedFile: this.props.step1.selectedFile,
      email: this.props.step1.email,
      TemplateSelectedOptionGcp: this.props.step1.TemplateSelectedOptionGcp,
      TemplateSelectedOptionAws: this.props.step1.TemplateSelectedOptionAws,
      SourceProviderSelectionGcp: this.props.step1.SourceProviderSelectionGcp,
      SourceProviderSelectionAws: this.props.step1.SourceProviderSelectionAws,
      TemplateUrlS3: this.props.step1.TemplateUrlS3,
      TemplateUrlGcp: this.props.step1.TemplateUrlGcp,
      TerraformSelectedOptionGcp: this.props.step1.TerraformSelectedOptionGcp,
      TerraformSelectedOptionAws: this.props.step1.TerraformSelectedOptionAws,
      folderNameGitTerraformAws: this.props.step1.folderNameGitTerraformAws,
      folderNameGitTerraformGcp: this.props.step1.folderNameGitTerraformGcp,
      templateNameGitCft: this.props.step1.templateNameGitCft,
      folderNameGitDM: this.props.step1.folderNameGitDM,
      mainTemplateNameGitDM: this.props.step1.mainTemplateNameGitDM,
      mainTemplateNameDMCS: this.props.step1.mainTemplateNameDMCS,
      urlName: this.props.step1.urlName,
      branchName: this.props.step1.branchName,
      userName: this.props.step1.userName,
      passWord: this.props.step1.passWord,
      // ProjectNamePersonalaccGcp:this.props.step1.ProjectNamePersonalaccGcp,
      // ProjectIDGcp:this.props.step1.ProjectIDGcp,
      // ServiceAccountGcp:this.props.step1.ServiceAccountGcp,
      // AccountIdAws:this.props.step1.AccountIdAws,
      // AccessKeyAws:this.props.step1.AccessKeyAws,
      // SecretAccessKeyAws:this.props.step1.SecretAccessKeyAws
      SelectedOptions: this.props.step2.SelectedOptions,
      workFlowSelectedOptions: this.props.step3.workFlowSelectedOptions,
      JiraOptionSelection: this.props.step3.JiraOptionSelection,
      JiraUserName: this.props.step3.JiraUserName,
      JiraPassword: this.props.step3.JiraPassword,
      projectKey: this.state.projectKey
    };

    console.log("Send this in a POST request:", formPayload);
    console.log(JSON.stringify(formPayload));
    axios
      .post(
        // `https://jsonplaceholder.typicode.com/users`,
        `http://35.237.232.109:8000/jiraUrl/`,
        // { crossDomain: true },
        { formPayload }
      )
      .then(res => {
        console.log("response object", res);
        // console.log("res type", res.type);
        console.log("response object data", res.data);
        console.log("response status", res.status);
        const resData = res.data.jiraUrl;
        const projectKey = res.data.projectKey;
        console.log("request id from backend", res.data.requestId);
        console.log("project key from backend", projectKey);
        this.setState({
          jiraUrl: resData,
          prjkey: projectKey,
          requestId: res.data.requestId
        });
        this.props.saveData(4, this.state);
        console.log("updated state", this.state);
        console.log("form payload in firstpost", formPayload);
        document.getElementById("nextId1").click();
        //  resData = res.data[jiraUrl];
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ jiraUrl: "https://google.com" });
        // this.props.saveData(4, this.state);
        // document.getElementById("nextId1").click();
      });

    axios
      .post(
        // `https://jsonplaceholder.typicode.com/users`,
        `http://35.237.232.109:8000/server/`,
        // { crossDomain: true },
        { formPayload }
      )
      .then(res => {
        console.log("response object", res);
        // console.log("res type", res.type);
        console.log("response object data", res.data);
        console.log("response status", res.status);
        // const resData = res.data.jiraUrl;
        console.log(
          "form payload prj key in second post",
          this.state.projectKey
        );
        // console.log("formpayload in second call", formpayload);
        // this.props.saveData(4, this.state);
        // document.getElementById("nextId1").click();
        //  resData = res.data[jiraUrl];
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ jiraUrl: "https://google.com" });
        // console.log(
        //   "form payload prj key in second post",
        //   this.state.projectKey
        // );
        // this.setState({ requestId: "" });
        // this.props.saveData(4, this.state);
        // document.getElementById("nextId1").click();
      });
    // this.handleClearForm();

    // alert(
    //   "Form have been Submitted successfully ....................... Please wait for few minutes"
    // );
  }

  render() {
    return (
      <>
        {/* {console.log("preview props", this.props.displayData())} */}
        <form
          className="w-75 bg-light text-dark offset-lg-1"
          validate="true"
          onSubmit={this.handleFormSubmit.bind(this)}
          noValidate
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          <h2>
            <center>
              <b> Infrastructure Configuration Summary </b>
            </center>{" "}
          </h2>{" "}
          <br />{" "}
          {this.props.step1.projectName && (
            <div>
              Project Name: &nbsp;&nbsp;<b>{this.props.step1.projectName}</b>
              {console.log("prj name", this.props.step1.projectName)} <br />
              <br />
            </div>
          )}
          {this.props.step1.projectSelection && (
            <div>
              Project Type: &nbsp;&nbsp;{" "}
              <b>{this.props.step1.projectSelection}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.step1.DeploymentEnvironmentSelection && (
            <div>
              Deployment Environment:&nbsp;&nbsp;
              <b>{this.props.step1.DeploymentEnvironmentSelection}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.step1.infraSelection && (
            <div>
              Cloud Environment :&nbsp;&nbsp;
              <b>{this.props.step1.infraSelection}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.accountGcpSelection && (
              <div>
                GCP Account:&nbsp;&nbsp;
                <b>{this.props.step1.accountGcpSelection}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.accountAwsSelection && (
              <div>
                AWS Account:&nbsp;&nbsp;
                <b>{this.props.step1.accountAwsSelection}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.TemplateSelectedOptionGcp && (
              <div>
                Template :&nbsp;&nbsp;
                <b>{this.props.step1.TemplateSelectedOptionGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.TemplateSelectedOptionAws && (
              <div>
                Template :&nbsp;&nbsp;
                <b>{this.props.step1.TemplateSelectedOptionAws}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.TerraformSelectedOptionGcp && (
              <div>
                Terraform Template :&nbsp;&nbsp;
                <b>{this.props.step1.TerraformSelectedOptionGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.TerraformSelectedOptionAws && (
              <div>
                Terraform Template :&nbsp;&nbsp;
                <b>{this.props.step1.TerraformSelectedOptionAws}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.folderNameGitTerraformAws && (
              <div>
                Folder Name :&nbsp;&nbsp;
                <b>{this.props.step1.folderNameGitTerraformAws}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.folderNameGitTerraformGcp && (
              <div>
                Folder Name :&nbsp;&nbsp;
                <b>{this.props.step1.folderNameGitTerraformGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.folderNameGitDM && (
              <div>
                Folder Name :&nbsp;&nbsp;
                <b>{this.props.step1.folderNameGitDM}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.templateNameGitCft && (
              <div>
                Template Name :&nbsp;&nbsp;
                <b>{this.props.step1.templateNameGitCft}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.TemplateSelectedOptionGcp.toString() ===
              "Deployment Manager" &&
            this.props.step1.mainTemplateNameGitDM && (
              <div>
                Main Template Name :&nbsp;&nbsp;
                <b>{this.props.step1.mainTemplateNameGitDM}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.SourceProviderSelectionGcp.toString() ===
              "Cloud Storage" &&
            this.props.step1.mainTemplateNameDMCS && (
              <div>
                Main Template Name :&nbsp;&nbsp;
                <b>{this.props.step1.mainTemplateNameDMCS}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.SourceProviderSelectionGcp && (
              <div>
                Source Provider :&nbsp;&nbsp;
                <b>{this.props.step1.SourceProviderSelectionGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.SourceProviderSelectionAws && (
              <div>
                Source Provider :&nbsp;&nbsp;
                <b>{this.props.step1.SourceProviderSelectionAws}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.TemplateUrlGcp && (
              <div>
                Template Folder URL :&nbsp;&nbsp;
                <b>{this.props.step1.TemplateUrlGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.TemplateUrlS3 && (
              <div>
                AWS Template URL:&nbsp;&nbsp;
                <b>{this.props.step1.TemplateUrlS3}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.SourceProviderSelectionAws.toString() === "Git" &&
            this.props.step1.urlName && (
              <div>
                Source Code URL:&nbsp;&nbsp;<b>{this.props.step1.urlName}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.SourceProviderSelectionGcp.toString() === "Git" &&
            this.props.step1.urlName && (
              <div>
                Source Code URL:&nbsp;&nbsp;<b>{this.props.step1.urlName}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.SourceProviderSelectionAws.toString() === "Git" &&
            this.props.step1.branchName && (
              <div>
                Source Code Branch:&nbsp;&nbsp;
                <b>{this.props.step1.branchName}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.SourceProviderSelectionGcp.toString() === "Git" &&
            this.props.step1.branchName && (
              <div>
                Source Code Branch:&nbsp;&nbsp;
                <b>{this.props.step1.branchName}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.email && (
            <div>
              QEmail ID:&nbsp;&nbsp;<b>{this.props.step1.email}</b>
              <br />
              <br />
            </div>
          )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.ProjectNamePersonalaccGcp && (
              <div>
                GCP Project Name:&nbsp;&nbsp;
                <b>{this.props.step1.ProjectNamePersonalaccGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.ProjectIDGcp && (
              <div>
                GCP Project ID:&nbsp;&nbsp;
                <b>{this.props.step1.ProjectIDGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "GCP" &&
            this.props.step1.ServiceAccountGcp && (
              <div>
                GCP Service Account:&nbsp;&nbsp;
                <b>{this.props.step1.ServiceAccountGcp}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.AccountIdAws && (
              <div>
                Account ID:&nbsp;&nbsp;<b>{this.props.step1.AccountIdAws3}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.AccessKeyAws && (
              <div>
                Access Key ID:&nbsp;&nbsp;<b>{this.props.step1.AccessKeyAws}</b>
                <br />
                <br />
              </div>
            )}
          {this.props.step1.infraSelection.toString() === "AWS" &&
            this.props.step1.SecretAccessKeyAws && (
              <div>
                Secret Access Key:&nbsp;&nbsp;
                <b>{this.props.step1.SecretAccessKeyAws}</b>
                <br />
                <br />
              </div>
            )}
          <div>
            Security Setup :<br />
            <br />
            <b>Infrastructure Security Check</b>
            <br />
            <b>Data Security Check</b>
            <br />
            <b>Network Security Check</b>
          </div>
          <br />
          {this.props.step3.workFlowSelectedOptions && (
            <div>
              Workflow Options:&nbsp;&nbsp;
              <b>{this.props.step3.workFlowSelectedOptions}</b>
              <br />
              <br />
            </div>
          )}
          <br />
          <input
            type="submit"
            className="btn btn-success"
            value=" Review & Submit"
          />
          <br />
        </form>
      </>
    );
  }
}
export default FormComponent4;
