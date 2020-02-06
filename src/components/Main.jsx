import React, { Component } from "react";
import axios from "axios";
import FormComponent1 from "./oldFormComponent1";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      errors: {
        emailr: "",
        passwordr: "",
        urlr: "",
        urlGCP: "",
        urls3: ""
      },
      projectName: "",
      hidden: "true",
      projectTypes: [
        { type: "AI / ML", isDisabled: "", id: 1 },
        { type: "Software Development", isDisabled: "disabled", id: 2 },
        { type: "Platform", isDisabled: "disabled", id: 3 },
        { type: "Data Lake", isDisabled: "disabled", id: 4 }
      ],
      projectSelection: "",
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
      email: "",
      AvailableOptions: [
        { isDisabled: "", id: 1, inf: "Infrastructure Security check" },
        { isDisabled: "", id: 2, inf: "Monitoring and Reporting" },
        { isDisabled: "", id: 3, inf: "Integration with JIRA" },
        { isDisabled: "", id: 4, inf: "Compliance check " }
      ],
      SelectedOptions: [],

      TemplateOptionsGcp: [
        { isDisabled: "", id: 1, inf: "Deployment Manager" },
        { isDisabled: "", id: 2, inf: "Terraform" }
      ],
      TemplateSelectedOptionGcp: "",
      TemplateOptionsAws: [
        { isDisabled: "", id: 1, inf: "Cloud Formation" },
        { isDisabled: "", id: 2, inf: "Terraform" }
      ],
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
      TemplateUrlGcp: "",
      workFlowOptions: [
        { isDisabled: "", id: 1, inf: "Logging" },
        { isDisabled: "", id: 2, inf: "Monitoring" },
        { isDisabled: "", id: 3, inf: "Integration with JIRA" },
        { isDisabled: "", id: 4, inf: "Git Provisioning" }
      ],
      workFlowSelectedOptions: [],
      MonitoringOptions: [
        { isDisabled: "", id: 1, inf: "Health Checks" },
        { isDisabled: "", id: 2, inf: "Stack Driver" }
      ],
      MonitoringOptionSelection: "",
      JiraOptions: [
        { isDisabled: "", id: 1, inf: "Add an existing JIRA account" },
        { isDisabled: "", id: 2, inf: "Create a new JIRA account" }
      ],
      JiraOptionSelection: ""
    };

    this.handleCheckSelectionChange = this.handleCheckSelectionChange.bind(
      this
    );
    this.handleTemplateSelection = this.handleTemplateSelection.bind(this);
    this.handleProviderSelection = this.handleProviderSelection.bind(this);
    this.urlTempNameChange = this.urlTempNameChange.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleProjectTypeSelect = this.handleProjectTypeSelect.bind(this);
    this.urlNameChange = this.urlNameChange.bind(this);
    this.handleBranchNameChange = this.handleBranchNameChange.bind(this);
    this.handleRepoUserNameChange = this.handleRepoUserNameChange.bind(this);
    this.handleinfraSelectionChange = this.handleinfraSelectionChange.bind(
      this
    );
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleRepoPasswordChange = this.handleRepoPasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  validUrlRegex = RegExp(
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
  );
  regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

  handleClearForm(e) {
    console.log("in clear");
    if (e) {
      e.preventDefault();
    }
    this.setState({
      projectName: "",
      projectSelection: "",
      PurposeSelection: [],
      urlName: "",
      branchName: "",
      userName: "",
      passWord: "",
      infraSelection: [],
      email: "",
      SelectedOptions: [],
      TemplateSelectedOptionGcp: [],
      TemplateSelectedOptionAws: [],
      SourceProviderSelectionAws: [],
      SourceProviderSelectionGcp: [],
      TemplateUrlGcp: "",
      TemplateUrlAws: "",
      selectedFile: null
    });
  }

  handleProjectNameChange(e) {
    this.setState({ projectName: e.target.value });
    console.log(this.state.projectName);
  }
  handleProjectTypeSelect(e) {
    this.setState({ projectSelection: e.target.value });
    console.log(this.state.projectSelection);
  }

  urlNameChange(e) {
    this.setState({ urlName: e.target.value });
    console.log(this.state.urlName);
    console.log(this.state.email);
    let errors = this.state.errors;
    let validUrl = new RegExp(this.validUrlRegex);
    errors.urlr = validUrl.test(e.target.value) ? "" : "Url is not valid!";

    this.setState({ errors, [e.target.name]: e.target.value });
  }
  handleBranchNameChange(e) {
    this.setState({ branchName: e.target.value });
    console.log(this.state.branchName);
  }
  handleRepoUserNameChange(e) {
    this.setState({ userName: e.target.value });
    console.log(this.state.userName);
  }

  handleRepoPasswordChange(e) {
    this.setState({ passWord: e.target.value });
    console.log(this.state.passWord);
    let errors = this.state.errors;
    errors.passwordr =
      e.target.value.length < 8
        ? "Password must be atleast 8 characters long!"
        : "";
    this.setState({ errors, [e.target.name]: e.target.value });
  }
  handleEmailChange(e) {
    console.log(this.state.email);
    let errors = this.state.errors;
    errors.emailr = this.validEmailRegex.test(e.target.value)
      ? ""
      : "Email is not valid!";
    this.setState({ email: e.target.value });
    this.setState({ errors, [e.target.name]: e.target.value });
  }

  handleinfraSelectionChange(e) {
    // console.log(this.state.infraSelection);
    // e.preventDefault();

    console.log("infra selection", e.target.value);

    this.setState({ infraSelection: [e.target.value] });
  }
  handleTemplateSelection(e) {
    if (this.state.infraSelection.toString() === "GCP") {
      this.setState({ TemplateSelectedOptionGcp: e.target.value });
    } else if (this.state.infraSelection.toString() === "AWS") {
      this.setState({ TemplateSelectedOptionAws: e.target.value });
    }
  }
  handleProviderSelection(e) {
    console.log(e.target.value);
    if (this.state.infraSelection.toString() === "GCP") {
      this.setState({ SourceProviderSelectionGcp: e.target.value });
      this.setState({ SourceProviderSelectionAws: [] });
    } else if (this.state.infraSelection.toString() === "AWS") {
      this.setState({ SourceProviderSelectionAws: e.target.value });
      this.setState({ SourceProviderSelectionGcp: [] });
    }
    // console.log("In provider selection", this.state.SourceProviderSelectionGcp);
    console.log("In provider selection", this.state.SourceProviderSelectionAws);
  }
  validS3Url = /^(http[s]?:\/\/){0,1}(s3-|s3\.)?(.*)\.amazonaws\.com/g;
  validGcpUrl = /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/gim;
  // http://BUCKET_NAME.storage.googleapis.com/OBJECT_NAME

  // http://storage.googleapis.com/BUCKET_NAME/OBJECT_NAME
  urlTempNameChange(e) {
    if (this.state.infraSelection.toString() === "GCP") {
      this.setState({ TemplateUrlGcp: e.target.value });
      let errors = this.state.errors;
      let validUrl = new RegExp(this.validGcpUrl);
      errors.urlGCP = validUrl.test(e.target.value)
        ? ""
        : "GCS Url is not valid!";
      this.setState({ errors, [e.target.name]: e.target.value });
    } else if (this.state.infraSelection.toString() === "AWS") {
      this.setState({ TemplateUrlAws: e.target.value });
      let errors = this.state.errors;
      let validUrl = new RegExp(this.validS3Url);
      errors.urls3 = validUrl.test(e.target.value)
        ? ""
        : "S3 Url is not valid!";
      this.setState({ errors, [e.target.name]: e.target.value });
    }
  }
  handleCheckSelectionChange(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.SelectedOptions.indexOf(newSelection) > -1) {
      newSelectionArray = [
        this.state.SelectedOptions.filter(s => s !== newSelection)
      ];
    } else {
      newSelectionArray = [...this.state.SelectedOptions, newSelection];
    }

    this.setState({ SelectedOptions: newSelectionArray });
    // console.log("selected check options" + this.state.SelectedOptions);
    // console.log("type is " + typeof this.state.SelectedOptions);
    // console.log("instance " + this.state.SelectedOptions instanceof Array);
  }

  handleFormSubmit(e) {
    console.log("in submit");
    // if (!this.canBeSubmitted()) {
    //   e.preventDefault();
    //   return;
    // }
    e.preventDefault();
    const formPayload = {
      projectName: this.state.projectName,
      projectSelection: this.state.projectSelection,
      urlName: this.state.urlName,
      branchName: this.state.branchName,
      userName: this.state.userName,
      passWord: this.state.passWord,
      infraSelection: this.state.infraSelection,
      email: this.state.email,
      SelectedOptions: this.state.SelectedOptions,
      SourceProviderSelectionAws: this.state.SourceProviderSelectionAws,
      SourceProviderSelectionGcp: this.state.SourceProviderSelectionGcp,
      TemplateUrlGcp: this.state.TemplateUrlGcp,
      TemplateUrlAws: this.state.TemplateUrlAws,
      selectedFile: this.state.selectedFile
    };

    console.log("Send this in a POST request:", formPayload);
    console.log(JSON.stringify(formPayload));
    axios
      .post(
        // `https://jsonplaceholder.typicode.com/users`,
        `http://54.210.14.89:8000/serverinput/`,
        // { crossDomain: true },
        { formPayload }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    // this.handleClearForm();

    alert(
      "Form have been Submitted successfully ....................... Please wait for few minutes"
    );
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // handleChange = input => e => {
  //   this.setState({ [input]: e.target.value });
  // };

  showStep = () => {
    const { step } = this.state;
    const {
      projectName,
      projectSelection,
      urlName,
      branchName,
      userName,
      passWord,
      infraSelection,
      email,
      SelectedOptions,
      TemplateSelectedOptionGcp,
      TemplateSelectedOptionAws,
      SourceProviderSelectionAws,
      SourceProviderSelectionGcp,
      TemplateUrlGcp,
      TemplateUrlAws,
      selectedFile,
      projectTypes,
      infraOptions,
      TemplateOptionsGcp,
      SourceProvidersGcp,
      TemplateOptionsAws,
      SourceProvidersAws,
      AvailableOptions,
      hidden,
      errors
    } = this.state;
    const values = {
      projectName,
      projectSelection,
      urlName,
      branchName,
      userName,
      passWord,
      infraSelection,
      email,
      SelectedOptions,
      TemplateSelectedOptionGcp,
      TemplateSelectedOptionAws,
      SourceProviderSelectionAws,
      SourceProviderSelectionGcp,
      TemplateUrlGcp,
      TemplateUrlAws,
      selectedFile,
      projectTypes,
      infraOptions,
      TemplateOptionsGcp,
      SourceProvidersGcp,
      TemplateOptionsAws,
      SourceProvidersAws,
      AvailableOptions,
      hidden,
      errors
    };

    switch (step) {
      case 1:
        return (
          <FormComponent1
            nextStep={this.nextStep.bind(this)}
            toggleShow={this.toggleShow.bind(this)}
            handleEmailChange={this.handleEmailChange.bind(this)}
            handleRepoPasswordChange={this.handleRepoPasswordChange.bind(this)}
            handleClearForm={this.handleClearForm.bind(this)}
            handleinfraSelectionChange={this.handleinfraSelectionChange.bind(
              this
            )}
            handleRepoUserNameChange={this.handleRepoUserNameChange.bind(this)}
            handleBranchNameChange={this.handleBranchNameChange.bind(this)}
            urlNameChange={this.urlNameChange.bind(this)}
            handleProjectTypeSelect={this.handleProjectTypeSelect.bind(this)}
            handleProjectNameChange={this.handleProjectNameChange.bind(this)}
            urlTempNameChange={this.urlTempNameChange.bind(this)}
            handleProviderSelection={this.handleProviderSelection.bind(this)}
            handleTemplateSelection={this.handleTemplateSelection.bind(this)}
            handleCheckSelectionChange={this.handleCheckSelectionChange.bind(
              this
            )}
            handleFormSubmit={this.handleFormSubmit.bind(this)}
            values={values}
          />
        );
      // case 2:
      //   return <FormComponent2 />;
      // case 3:
      //   return <FormComponent3 />;

      // case 4:
      //   return <FormComponent4 />;

      // case 5:
      //   return <FormComponent5 />;
    }
  };
  render() {
    const { step } = this.state;
    return (
      <>
        <h2>Step {step} of 5</h2>
        {this.showStep()}
      </>
    );
  }
}

export default Main;
