import React, { Component } from "react";
import FileUpload from "./FileUpload";

class FormComponent1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
      folderNameGitTerraformGcp:"",
      folderNameGitTerraformAws:"",
      templateNameGitCft:"",
      folderNameGitDM:"",
      mainTemplateNameGitDM:"",
      mainTemplateNameDMCS:"",
      projectName: "",
      projectTypes:
      [
        { type: "AI / ML", isDisabled: "", id: 1 },
        { type: "Software Development", isDisabled: "disabled", id: 2 },
        { type: "Platform", isDisabled: "disabled", id: 3 },
        { type: "Data Lake", isDisabled: "disabled", id: 4 }
      ],
       DeploymentEnvironments:[
        { type: "Dev", isDisabled: "", id: 1 },
        { type: "Test", isDisabled: "", id: 2 },
        { type: "Prod", isDisabled: "", id: 3 },
      ],
      DeploymentEnvironmentSelection:"",
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
      selectedFile:null,
      loaded:0,
      loaded1:0,
      email: "",
      AccountIdAws: "",
      AccessKeyAws: "",
      SecretAccessKeyAws: "",
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
      TerraformOptionsGcp: [
        { isDisabled: "", id: 1, inf: "Manual Upload" },
        { isDisabled: "disabled", id: 2, inf: "Terraform Generator" }
       
      ],
      TerraformSelectedOptionGcp: "",
      TerraformOptionsAws: [
        { isDisabled: "", id: 1, inf: "Manual Upload" },
        { isDisabled: "disabled", id: 2, inf: "Terraform Generator" }
       
      ],
      TerraformSelectedOptionAws: "",
    
    }
      
  
  }
  handleClearForm1(e){
    e.preventDefault();
    this.setState({
      folderNameGitTerraformGcp:"",
      folderNameGitTerraformAws:"",
      templateNameGitCft:"",
      folderNameGitDM:"",
      mainTemplateNameGitDM:"",
      mainTemplateNameDMCS:"",
      projectName: "",
      DeploymentEnvironmentSelection:"",
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
      selectedFile:null,
      loaded:0,
      loaded1:0,
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
      
      TerraformSelectedOptionAws: "",


    })
    
    
  }



componentWillUnmount () { 
  this.props.saveData(1,this.state)
 
}
componentDidMount() {
 
  this.setState({folderNameGitTerraformGcp:this.props.folderNameGitTerraformGcp})
  this.setState({folderNameGitTerraformAws:this.props.folderNameGitTerraformAws})
  this.setState({templateNameGitCft:this.props.templateNameGitCft})
  this.setState({folderNameGitDM:this.props.folderNameGitDM})
  this.setState({mainTemplateNameGitDM:this.props.mainTemplateNameGitDM})
  this.setState({mainTemplateNameDMCS:this.props.mainTemplateNameDMCS})
  this.setState({projectName:this.props.projectName})
  this.setState({projectSelection : this.props.projectSelection})
  this.setState({DeploymentEnvironmentSelection :this.props.DeploymentEnvironmentSelection})
  this.setState({hidden : this.props.hidden})
  this.setState({hidden1 : this.props.hidden1})
  this.setState({hidden2 : this.props.hidden2})
  this.setState({urlName : this.props.urlName})
  this.setState({branchName : this.props.branchName})
  this.setState({userName : this.props.userName})
  this.setState({passWord : this.props.passWord})
  this.setState({infraSelection :this.props.infraSelection})
  this.setState({accountGcpSelection : this.props.accountGcpSelection})
  this.setState({accountAwsSelection : this.props.accountAwsSelection})
  this.setState({ProjectNamePersonalaccGcp : this.props.ProjectNamePersonalaccGcp})
  this.setState({ProjectIDGcp : this.props.ProjectIDGcp})
  this.setState({ServiceAccountGcp : this.props.ServiceAccountGcp})
  this.setState({JsonKey : this.props.JsonKey})
  this.setState({selectedFile : this.props.selectedFile})
  this.setState({loaded : this.props.loaded})
  this.setState({loaded1 : this.props.loaded1})
  this.setState({email : this.props.email})
  this.setState({AccountIdAws : this.props.AccountIdAws})
  this.setState({AccessKeyAws : this.props.AccessKeyAws})
  this.setState({SecretAccessKeyAws : this.props.SecretAccessKeyAws})
  this.setState({TemplateSelectedOptionGcp : this.props.TemplateSelectedOptionGcp})
  this.setState({TemplateSelectedOptionAws : this.props.TemplateSelectedOptionAws})
  this.setState({SourceProviderSelectionGcp : this.props.SourceProviderSelectionGcp})
  this.setState({SourceProviderSelectionAws : this.props.SourceProviderSelectionAws})
  this.setState({TemplateUrlS3 : this.props.TemplateUrlS3})
  this.setState({TemplateUrlGcp : this.props.TemplateUrlGcp})
  this.setState({TerraformSelectedOptionAws:this.props.TerraformSelectedOptionAws})
  this.setState({TerraformSelectedOptionGcp:this.props.TerraformSelectedOptionGcp})
  
}
 


    render() {

        return (
            <div>   
        <form
          className="w-75 bg-light text-dark offset-lg-1"
          validate="true"
          noValidate
          style={{ marginTop: "50px" }}
        >
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
        <label className="col-form-label required"><b>Project Name</b></label>
       

        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => this.setState({projectName : e.target.value })}
        //  onChange={this.handleProjectNameChange.bind(this)}
         placeholder="Enter Project Name"
         required
        value={this.state.projectName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about project Name"
          ></i>

           <div
            style={{
              display: "inline-block",
               width: "770px",
              marginRight: "20px",
              marginLeft: "30px",
              marginBottom: "11px"
            }}
          >
           
       
    <div className="form-group">
    
    <label className="col-form-label required"><b>Project Type</b></label>
    <select
      options={this.state.projectTypes}
      value={this.state.projectSelection}
      onChange={(e) => {
                    this.setState({   
                         projectSelection: e.target.value })
                }}
      placeholder="select Project Type"
      className="form-control form-control-sm mb-2 mr-sm-2"
      required
    >
      <option>Select Project Type</option>
      {this.state.projectTypes.map(opt => {
        return (
          <option key={opt.id} disabled={opt.isDisabled} value={opt.type}>
            {opt.type}
            
          </option>
        );
      })}
    </select>
       </div>
       </div>

           <div
            style={{
              display: "inline-block",
               width: "770px",
              marginRight: "20px",
              marginLeft: "30px",
              marginBottom: "11px"
            }}
          >
           
       
    <div className="form-group">
    
    <label className="col-form-label required"><b>Deployment Environment</b></label>
    <select
      options={this.state.DeploymentEnvironments}
      value={this.state.DeploymentEnvironmentSelection}
      onChange={(e) => {
                    this.setState({
                       DeploymentEnvironmentSelection: e.target.value })  
                    }}
                       
                  
      placeholder="select Deployment Environment Type"
      className="form-control form-control-sm mb-2 mr-sm-2"
      required
    >
      <option>Select Deployment Environment Type</option>
     
      {this.state.DeploymentEnvironments.map(opt => {
        return (
          <option key={opt.id} disabled={opt.isDisabled} value={opt.type}>
            {opt.type}
          </option>
        );
      })}
    </select>
       </div>
       </div>



    <div className="form-group">
    <label className="form-check-label" style={{marginLeft:"30px", marginRight:"20px"}}><b>Cloud Environment </b> &nbsp;</label>
    <div className="form-check-inline ">
      {this.state.infraOptions.map((opt, i) => {
        return (
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.infraSelection.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                     
                        infraSelection: [e.target.value]} )  
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

   {this.state.infraSelection.toString() === "GCP" && (
       <div className="form-group">
    <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>GCP Account </b> &nbsp;</label>
    <div className="form-check-inline ">
      {this.state.accountGcpOptions.map((opt, i) => {
        return (
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.accountGcpSelection.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                       accountGcpSelection: [e.target.value]})  
                    }}
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
        );
      })}
      </div>
    </div>
      )}
     
    
     {this.state.infraSelection.toString() === "GCP" && (
       this.state.accountGcpSelection.toString() ===
              "Driveboard" && (
                  <>
                  
       <div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Template</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.TemplateOptionsGcp.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.TemplateSelectedOptionGcp.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                       TemplateSelectedOptionGcp : [e.target.value]} )  
                    }}
                      
                   
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>
    </>
    ))}


    
   {this.state.infraSelection.toString() === "GCP" && (
       this.state.accountGcpSelection.toString() ===
              "Driveboard" && this.state.TemplateSelectedOptionGcp.toString() === "Deployment Manager" && (
<div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.SourceProvidersGcp.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.SourceProviderSelectionGcp.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                       SourceProviderSelectionGcp  : [e.target.value]} )  
                    }}
                
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>


    ) )}    

     

  {this.state.infraSelection.toString() === "GCP" && (
       this.state.accountGcpSelection.toString() ===
              "Personal" && (
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
        <label className="col-form-label required"><b>GCP project Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       ProjectNamePersonalaccGcp: e.target.value} )  
                    }}
                 
         placeholder="Enter GCP Project Name"
         required
         value={this.state.ProjectNamePersonalaccGcp}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about GCP project Name"
          ></i>
       


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
        <label className="col-form-label required"><b>GCP project ID</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                      ProjectIDGcp: e.target.value })  
                    }}
                        
                   
         placeholder="Enter GCP Project ID"
         required
         value={this.state.ProjectIDGcp}
          />
        </div>
        </div>
        
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about GCP project ID"
          ></i>



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
        <label className="col-form-label required"><b>GCP Service Account </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       ServiceAccountGcp  : e.target.value} )  
                    }}
         placeholder="Enter GCP Service Account"
         required
         value={this.state.ServiceAccountGcp}
          />
        </div>
        </div>
        
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about GCP Service Account"
          ></i>

             <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "11px"
                  }}
                >
                  <p><b>Json Key File</b></p>
                  <FileUpload  {...this.state} />
            </div>
            

 </>
              ))}


 
    

{this.state.infraSelection.toString() === "AWS" && (
       <div className="form-group">
    <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>AWS Account </b> &nbsp;</label>
    <div className="form-check-inline ">
      {this.state.accountAwsOptions.map((opt, i) => {
        return (
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.accountAwsSelection.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                      accountAwsSelection: [e.target.value]} )  
                    }}
          
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
        );
      })}
      </div>
    </div>
      )}
     
    


     {this.state.infraSelection.toString() === "AWS" && (
       this.state.accountAwsSelection.toString() ===
              "Driveboard" && (
                  <>
                  
       <div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Template</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.TemplateOptionsAws.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.TemplateSelectedOptionAws.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                      TemplateSelectedOptionAws : [e.target.value]} )  
                    }}
    
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>
   
 </>
              ))}
    {this.state.infraSelection.toString()==="AWS" &&this.state.TemplateSelectedOptionAws.toString() === "Terraform" && this.state.accountAwsSelection.toString()==="Driveboard" && (
        <div className="form-group">
        <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Terraform Template</b> &nbsp;</label>
        <div className="form-check-inline ">
       {this.state.TerraformOptionsAws.map((opt, i) => {
         return (
             <>
           <label key={i} className="form-check-label">
             <input
               value={opt.inf}
               checked={this.state.TerraformSelectedOptionAws.toString().indexOf(opt.inf) > -1}
               onChange={(e) => {
                     this.setState({
                       TerraformSelectedOptionAws : [e.target.value]} )  
                     }}
         
               type="radio"
               key={opt.id}
               disabled={opt.isDisabled}
             />
             &nbsp;
             {opt.inf}
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
           </label>
           </>
         );
       })}
       </div>
     </div>

    )}
     {this.state.TemplateSelectedOptionGcp.toString() === "Terraform" && this.state.infraSelection.toString()==="GCP" && this.state.accountGcpSelection.toString()==="Driveboard"    && (

<div className="form-group">
        <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Terraform Template</b> &nbsp;</label>
        <div className="form-check-inline ">
       {this.state.TerraformOptionsGcp.map((opt, i) => {
         return (
             <>
           <label key={i} className="form-check-label">
             <input
               value={opt.inf}
               checked={this.state.TerraformSelectedOptionGcp.toString().indexOf(opt.inf) > -1}
               onChange={(e) => {
                     this.setState({
                       TerraformSelectedOptionGcp : [e.target.value]} )  
                     }}
         
               type="radio"
               key={opt.id}
               disabled={opt.isDisabled}
             />
             &nbsp;
             {opt.inf}
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
           </label>
           </>
         );
       })}
       </div>
     </div>
)}
     {this.state.infraSelection.toString()==="GCP" && this.state.TemplateSelectedOptionGcp.toString() === "Terraform" && this.state.TerraformSelectedOptionGcp.toString()==="Manual Upload" && (
      <div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.SourceProvidersGcp.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.SourceProviderSelectionGcp.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                       SourceProviderSelectionGcp  : [e.target.value]} )  
                    }}
                
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>


     )}
     

     {/* <div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.SourceProvidersAws.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.SourceProviderSelectionAws.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                      SourceProviderSelectionAws : [e.target.value]} )  
                    }}
        
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>



 */}  

 {this.state.infraSelection.toString()==="GCP" && this.state.TerraformSelectedOptionGcp.toString()==="Manual Upload" && this.state.TemplateSelectedOptionGcp.toString()==="Terraform" && this.state.SourceProviderSelectionGcp.toString() === "Git" && (
          <div>
          <div
            style={{
              display: "inline-block",
              width: "770px",
              marginRight: "8px",
              marginLeft: "30px",
              marginBottom: "5px"
            }}
          >


  <div className="form-group ">
  <label className="col-form-label required"><b>Source code URL </b></label>
  <input
   className="form-control mb-2 mr-sm-2"
   type="text"
   onChange={(e) => {
              this.setState({
                  urlName : e.target.value} )  
              }}
           
   placeholder="Enter Source Code URL"
   required
   value={this.state.urlName}
    />
  </div>
  </div>
     
    <i
      className="fa fa-info-circle fa-lg"
      style={{ color: "black" }}
      title="Description about Source Code URL"
    ></i>  

<div
            style={{
              display: "inline-block",
              width: "770px",
              marginRight: "8px",
              marginLeft: "30px",
              marginBottom: "5px"
            }}
          >


  <div className="form-group ">
  <label className="col-form-label required"><b>Source code Branch </b></label>
  <input
   className="form-control mb-2 mr-sm-2"
   type="text"
   onChange={(e) => {
              this.setState({
                 branchName : e.target.value} )  
              }}
           
          
   placeholder="Enter Source Code Branch"
   required
   value={this.state.branchName}
    />
  </div>
  </div>
     
    <i
      className="fa fa-info-circle fa-lg"
      style={{ color: "black" }}
      title="Description about Source Code Branch"
    ></i>  

<div
            style={{
              display: "inline-block",
              width: "770px",
              marginRight: "8px",
              marginLeft: "30px",
              marginBottom: "5px"
            }}
          >


  <div className="form-group ">
  <label className="col-form-label required"><b>Folder Name:</b></label>
  <input
   className="form-control mb-2 mr-sm-2"
   type="text"
   onChange={(e) => {
              this.setState({
                folderNameGitTerraformGcp  : e.target.value} )  
              }}
           
          
   placeholder="Enter Folder Name"
   required
   value={this.state.folderNameGitTerraformGcp}
    />
  </div>
  </div>
     
    <i
      className="fa fa-info-circle fa-lg"
      style={{ color: "black" }}
      title="Description about Folder Name"
    ></i>  



          <h4 style={{ marginTop: "5px" }}>
            <center>Source Provider Credentials</center>
          </h4>

      <div
            style={{
              display: "inline-block",
              width: "770px",
              marginRight: "8px",
              marginLeft: "30px",
              marginBottom: "11px"
            }}
          >


  <div className="form-group ">
  <label className="col-form-label required"><b>user Name</b></label>
  <input
   className="form-control mb-2 mr-sm-2"
   type="text"
   onChange={(e) => {
              this.setState({
                  userName : e.target.value})  
              }}
 
   placeholder="Enter Repo Username"
   required
   value={this.state.userName}
    />
  </div>
  </div>
     
    <i
      className="fa fa-info-circle fa-lg"
      style={{ color: "black" }}
      title="Description about Repo UserName"
    ></i>       

<div
            style={{
              display: "inline-block",
              width: "770px",
              marginRight: "8px",
              marginLeft: "30px",
              marginBottom: "11px"
            }}
          >

  <div className="form-group ">
  <label className="col-form-label required"><b>Password </b></label>
  <input
  
   className="form-control mb-2 mr-sm-2"
   type={this.state.hidden ? "password" : "text"}
   onChange={(e) => {
              this.setState({
                  passWord  : e.target.value} )  
              }}
           
  
   placeholder="Enter Repo Password"
   required
   value={this.state.passWord}
    />
  </div>
  </div>

    {this.state.hidden && (
        <span onClick= {() => {this.setState({
            hidden: !this.state.hidden} )  
        }}>

           <i className="fa fa-eye errspan"></i>
            </span>
    
          )}


       {!this.state.hidden && (
          <span onClick= {() => {this.setState({
              hidden: !this.state.hidden} )  
          }}>

           <i className="icon-eye-close errspan"></i>
            </span>
    
          )}     

</div>
      )}
      {this.state.infraSelection.toString()==="GCP" && this.state.TemplateSelectedOptionGcp.toString()==="Terraform"&& this.state.TerraformSelectedOptionGcp.toString()==="Manual Upload" && this.state.SourceProviderSelectionGcp.toString() === "Cloud Storage" && (
        <>
 <div
 style={{
   display: "inline-block",
   width: "770px",
   marginRight: "8px",
   marginLeft: "30px",
   marginBottom: "5px"
 }}
>

<div className="form-group ">
<label className="col-form-label required"><b>Template Folder URL </b></label>
<input
className="form-control mb-2 mr-sm-2"
type="text"
onChange={(e) => {
   this.setState({
      TemplateUrlGcp: e.target.value} )  
   }}

placeholder="Enter GCP Template URL"
required
value={this.state.TemplateUrlGcp}
/>
</div>
</div>

<i
className="fa fa-info-circle fa-lg"
style={{ color: "black" }}
title="Description about GCP Template URL"
></i>  

</>
      
)}
 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

{this.state.infraSelection.toString()==="GCP"  && this.state.TemplateSelectedOptionGcp.toString()==="Terraform"  && this.state.TerraformSelectedOptionGcp.toString()==="Manual Upload" && this.state.SourceProviderSelectionGcp.toString() === "Local" && (

  <>      
  <p><b>Local File</b></p>
<FileUpload {...this.state}/>
</>

 )}
 </div>


  {this.state.infraSelection.toString() === "AWS" &&
            this.state.accountAwsSelection.toString() === "Personal" && (

                <>

                 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "11px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Account ID </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       AccountIdAws: e.target.value} )  
                    }}
                 
         placeholder="Enter AWS Account ID"
         value={this.state.AccountIdAws}
         required
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about AWS Account ID"
          ></i>  

           <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Access Key ID </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type={this.state.hidden1 ? "password" : "text"}
         onChange={(e) => {
                    this.setState({
                       AccessKeyAws : e.target.value })  
                    }}
       
         placeholder="Enter AWS Access Key ID"
         value={this.state.AccessKeyAws}
         required
          />
        </div>
        </div>

          {this.state.hidden1 && (
             
              
                  <span onClick= {() => {this.setState({
                      hidden1: !this.state.hidden1} )  
                  }}>
              
        
                 <i className="fa fa-eye errspan"></i>
                  </span>
          
                )}


             {!this.state.hidden1 && (
              <span onClick= {() => {this.setState({
                      hidden1: !this.state.hidden1} )  
                  }}>
 
                 <i className="icon-eye-close errspan"></i>
                  </span>
          
                )}     
               
<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "11px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Secret Access Key</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type={this.state.hidden2 ? "password" : "text"}
         onChange={(e) => {
                    this.setState({
                       SecretAccessKeyAws : e.target.value} )  
                    }}
                
         placeholder="Enter AWS Secret Access Key"
         required
         value={this.state.SecretAccessKeyAws}
          />
        </div>
        </div>

          {this.state.hidden2 && (
              <span onClick= {() => {this.setState({
                  hidden2: !this.state.hidden2} )  
              }}>
          
             
                 <i className="fa fa-eye errspan"></i>
                  </span>
          
                )}


             {!this.state.hidden2 && (
                 <span onClick= {() => {this.setState({
                    hidden2: !this.state.hidden2} )  
                }}>
            
              
                 <i className="icon-eye-close errspan"></i>
                  </span>
          
                )}     
 <div className="form-group">
       <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
       <div className="form-check-inline ">
      {this.state.SourceProvidersAws.map((opt, i) => {
        return (
            <>
          <label key={i} className="form-check-label">
            <input
              value={opt.inf}
              checked={this.state.SourceProviderSelectionAws.toString().indexOf(opt.inf) > -1}
              onChange={(e) => {
                    this.setState({
                       SourceProviderSelectionAws : [e.target.value]} )  
                    }}
                      
              
              type="radio"
              key={opt.id}
              disabled={opt.isDisabled}
            />
            &nbsp;
            {opt.inf}
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
          </label>
          </>
        );
      })}
      </div>
    </div>

</>

            )}

{/*  
{this.state.infraSelection.toString() === "AWS" &&
this.state.accountAwsSelection.toString() === "Personal" && this.state.SourceProviderSelectionAws.toString()==="Git" &&(

    <>

    </>
)} */}





            <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >
                  
                  {this.state.SourceProviderSelectionGcp.toString() === "Local" &&
            this.state.infraSelection.toString() === "GCP" && this.state.TemplateSelectedOptionGcp.toString()==="Deployment Manager" &&(
                <>
                <p><b>Local File</b></p>
              <FileUpload {...this.state}/>
              </>
            )}
 </div>
            {this.state.infraSelection.toString()==="AWS" && this.state.accountAwsSelection.toString()==="Driveboard" && this.state.TemplateSelectedOptionAws.toString()==="Cloud Formation" && (
                   <>
                   <div className="form-group">
                          <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
                          <div className="form-check-inline ">
                         {this.state.SourceProvidersAws.map((opt, i) => {
                           return (
                               <>
                             <label key={i} className="form-check-label">
                               <input
                                 value={opt.inf}
                                 checked={this.state.SourceProviderSelectionAws.toString().indexOf(opt.inf) > -1}
                                 onChange={(e) => {
                                       this.setState({
                                          SourceProviderSelectionAws  : [e.target.value]} )  
                                       }}
                                    
                                 type="radio"
                                 key={opt.id}
                                 disabled={opt.isDisabled}
                               />
                               &nbsp;
                               {opt.inf}
                               &nbsp;&nbsp;
                               &nbsp;&nbsp;
                               &nbsp;&nbsp;
                               &nbsp;&nbsp;
                             </label>
                             </>
                           );
                         })}
                         </div>
                       </div> 
                         </> 
                       )}
            <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >      

          {this.state.SourceProviderSelectionAws.toString() === "Local" &&
            this.state.infraSelection.toString() === "AWS" && this.state.TemplateSelectedOptionAws.toString()==="Cloud Formation"  && (
                <>
                <p><b>Local File</b></p>
              <FileUpload {...this.state}/>
              </>
            )}
</div>      
                  
          
 {this.state.SourceProviderSelectionGcp.toString()=== "Cloud Storage" &&
            this.state.infraSelection.toString() === "GCP" && this.state.TemplateSelectedOptionGcp.toString() === "Deployment Manager" && (
        <>
         <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Template Folder URL </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       TemplateUrlGcp: e.target.value} )  
                    }}
   
         placeholder="Enter GCP Template URL"
         required
         value={this.state.TemplateUrlGcp}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about GCP Template URL"
          ></i>  



<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Main Template Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       mainTemplateNameDMCS: e.target.value} )  
                    }}
   
         placeholder="Enter DM Main Template Name"
         required
         value={this.state.mainTemplateNameDMCS}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about GCP Main Template Name"
          ></i>  


</>
            )}
            {this.state.infraSelection.toString() === "AWS" && this.state.accountAwsSelection.toString()==="Driveboard" && this.state.TemplateSelectedOptionAws.toString() === "Terraform" && this.state.TerraformSelectedOptionAws.toString()==="Manual Upload" && (
              <>
              <div className="form-group">
                     <label className="form-check-label" style={{marginLeft:"30px", marginRight:"18px"}}><b>Source Provider</b> &nbsp;</label>
                     <div className="form-check-inline ">
                    {this.state.SourceProvidersAws.map((opt, i) => {
                      return (
                          <>
                        <label key={i} className="form-check-label">
                          <input
                            value={opt.inf}
                            checked={this.state.SourceProviderSelectionAws.toString().indexOf(opt.inf) > -1}
                            onChange={(e) => {
                                  this.setState({
                                     SourceProviderSelectionAws  : [e.target.value]} )  
                                  }}
                               
                            type="radio"
                            key={opt.id}
                            disabled={opt.isDisabled}
                          />
                          &nbsp;
                          {opt.inf}
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;
                          &nbsp;&nbsp;
                        </label>
                        </>
                      );
                    })}
                    </div>
                  </div> 
                    </> 
                  )}
<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "7px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


               {this.state.SourceProviderSelectionAws.toString() === "Local" &&
            this.state.infraSelection.toString() === "AWS" && this.state.TemplateSelectedOptionAws.toString()==="Terraform" && this.state.TerraformSelectedOptionAws.toString()==="Manual Upload"  && (
                <>
                <p><b>Local File</b></p>
              <FileUpload {...this.state}/>
              </>
            )}
</div>




{this.state.SourceProviderSelectionAws.toString()=== "S3" &&
            this.state.infraSelection.toString() === "AWS" && (
        <>
         <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>AWS Template URL </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       TemplateUrlS3: e.target.value} )  
                    }}
         
         placeholder="Enter AWS Template URL"
         required
         value={this.state.TemplateUrlS3}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about AWS Template URL"
          ></i>  

</>
            )}



 {(this.state.SourceProviderSelectionAws.toString() === "Git" && this.state.TemplateSelectedOptionAws.toString()==="Cloud Formation" && 
            this.state.infraSelection.toString() === "AWS" && (
              <div>
                <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Source code URL </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                        urlName : e.target.value} )  
                    }}
  
         placeholder="Enter Source Code URL"
         required
         value={this.state.urlName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Source Code URL"
          ></i>  

 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Source code Branch </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                      branchName : e.target.value} )  
                    }}
  
         placeholder="Enter Source Code Branch"
         required
         value={this.state.branchName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Source Code Branch"
          ></i>  

<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Template Name </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                      templateNameGitCft : e.target.value} )  
                    }}
  
         placeholder="Enter Template Name"
         required
         value={this.state.templateNameGitCft}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Template Name"
          ></i>  




                <h4 style={{ marginTop: "5px" }}>
                  <center>Source Provider Credentials</center>
                </h4>

            <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>user Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       userName : e.target.value} )  
                    }}
           
         placeholder="Enter Repo Username"
         required
         value={this.state.userName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Repo UserName"
          ></i>       
 
 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Password </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type={this.state.hidden ? "password" : "text"}
         onChange={(e) => {
                    this.setState({
                       passWord  : e.target.value} )  
                    }}
                 
                    
         placeholder="Enter Repo Password"
         required
         value={this.state.passWord}
          />
        </div>
        </div>

          {this.state.hidden && (
             <span onClick= {() => {this.setState({
                hidden: !this.state.hidden} )  
            }}>
             
 
                 <i className="fa fa-eye errspan"></i>
                  </span>
          
                )}


             {!this.state.hidden && (
               <span onClick= {() => {this.setState({
                  hidden: !this.state.hidden} )  
              }}>
              
                 
                 <i className="icon-eye-close errspan"></i>
                  </span>
          
                )}     

</div>
            ))}



{(this.state.SourceProviderSelectionAws.toString() === "Git" && this.state.TemplateSelectedOptionAws.toString()==="Terraform" &&  this.state.TerraformSelectedOptionAws.toString()==="Manual Upload" &&
this.state.infraSelection.toString() === "AWS" && (
  <div>
    <div
      style={{
        display: "inline-block",
        width: "770px",
        marginRight: "8px",
        marginLeft: "30px",
        marginBottom: "5px"
      }}
    >


<div className="form-group ">
<label className="col-form-label required"><b>Source code URL </b></label>
<input
className="form-control mb-2 mr-sm-2"
type="text"
onChange={(e) => {
        this.setState({
            urlName : e.target.value} )  
        }}

placeholder="Enter Source Code URL"
required
value={this.state.urlName}
/>
</div>
</div>

<i
className="fa fa-info-circle fa-lg"
style={{ color: "black" }}
title="Description about Source Code URL"
></i>  

<div
      style={{
        display: "inline-block",
        width: "770px",
        marginRight: "8px",
        marginLeft: "30px",
        marginBottom: "5px"
      }}
    >


<div className="form-group ">
<label className="col-form-label required"><b>Source code Branch </b></label>
<input
className="form-control mb-2 mr-sm-2"
type="text"
onChange={(e) => {
        this.setState({
          branchName : e.target.value} )  
        }}

placeholder="Enter Source Code Branch"
required
value={this.state.branchName}
/>
</div>
</div>

<i
className="fa fa-info-circle fa-lg"
style={{ color: "black" }}
title="Description about Source Code Branch"
></i>  

<div
      style={{
        display: "inline-block",
        width: "770px",
        marginRight: "8px",
        marginLeft: "30px",
        marginBottom: "5px"
      }}
    >


<div className="form-group ">
<label className="col-form-label required"><b> Folder Name </b></label>
<input
className="form-control mb-2 mr-sm-2"
type="text"
onChange={(e) => {
        this.setState({
          folderNameGitTerraformAws : e.target.value} )  
        }}

placeholder="Enter Folder Name"
required
value={this.state.folderNameGitTerraformAws}
/>
</div>
</div>

<i
className="fa fa-info-circle fa-lg"
style={{ color: "black" }}
title="Description about Folder Name"
></i>  




    <h4 style={{ marginTop: "5px" }}>
      <center>Source Provider Credentials</center>
    </h4>

<div
      style={{
        display: "inline-block",
        width: "770px",
        marginRight: "8px",
        marginLeft: "30px",
        marginBottom: "5px"
      }}
    >


<div className="form-group ">
<label className="col-form-label required"><b>user Name</b></label>
<input
className="form-control mb-2 mr-sm-2"
type="text"
onChange={(e) => {
        this.setState({
           userName : e.target.value} )  
        }}

placeholder="Enter Repo Username"
required
value={this.state.userName}
/>
</div>
</div>

<i
className="fa fa-info-circle fa-lg"
style={{ color: "black" }}
title="Description about Repo UserName"
></i>       

<div
      style={{
        display: "inline-block",
        width: "770px",
        marginRight: "8px",
        marginLeft: "30px",
        marginBottom: "5px"
      }}
    >

<div className="form-group ">
<label className="col-form-label required"><b>Password </b></label>
<input
className="form-control mb-2 mr-sm-2"
type={this.state.hidden ? "password" : "text"}
onChange={(e) => {
           this.setState({
               passWord  : e.target.value} )  
           }}
        

placeholder="Enter Repo Password"
required
value={this.state.passWord}

/>
</div>
</div>

{this.state.hidden && (
 <span onClick= {() => {this.setState({
    hidden: !this.state.hidden} )  
}}>
 

     <i className="fa fa-eye errspan"></i>
      </span>

    )}


 {!this.state.hidden && (
   <span onClick= {() => {this.setState({
      hidden: !this.state.hidden} )  
  }}>
  
     
     <i className="icon-eye-close errspan"></i>
      </span>

    )}     

</div>
))}




            {(this.state.SourceProviderSelectionGcp.toString() === "Git" &&
            this.state.infraSelection.toString() === "GCP" && this.state.TemplateSelectedOptionGcp.toString() === "Deployment Manager" && (
              <div>
                <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Source code URL </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                        urlName : e.target.value} )  
                    }}
                 
         placeholder="Enter Source Code URL"
         required
         value={this.state.urlName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Source Code URL"
          ></i>  

 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Source code Branch </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                       branchName : e.target.value} )  
                    }}
                 
                
         placeholder="Enter Source Code Branch"
         required
         value={this.state.branchName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Source Code Branch"
          ></i>  

<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Folder Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                        folderNameGitDM : e.target.value} )  
                    }}
                 
         placeholder="Enter Folder Name"
         required
         value={this.state.folderNameGitDM}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Folder Name"
          ></i>  

<div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>Main Template Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                        mainTemplateNameGitDM : e.target.value} )  
                    }}
                 
         placeholder="Enter Main Template Name"
         required
         value={this.state.mainTemplateNameGitDM}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Main Template Name"
          ></i>  

                <h4 style={{ marginTop: "5px" }}>
                  <center>Source Provider Credentials</center>
                </h4>

            <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >


        <div className="form-group ">
        <label className="col-form-label required"><b>user Name</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="text"
         onChange={(e) => {
                    this.setState({
                        userName : e.target.value})  
                    }}
       
         placeholder="Enter Repo Username"
         required
         value={this.state.userName}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Description about Repo UserName"
          ></i>       
 
 <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "5px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>Password </b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type={this.state.hidden ? "password" : "text"}
         onChange={(e) => {
                    this.setState({
                        passWord  : e.target.value} )  
                    }}
                 
        
         placeholder="Enter Repo Password"
         required
         value={this.state.passWord}
          />
        </div>
        </div>

          {this.state.hidden && (
              <span onClick= {() => {this.setState({
                  hidden: !this.state.hidden} )  
              }}>
 
                 <i className="fa fa-eye errspan"></i>
                  </span>
          
                )}


             {!this.state.hidden && (
                <span onClick= {() => {this.setState({
                    hidden: !this.state.hidden} )  
                }}>
 
                 <i className="icon-eye-close errspan"></i>
                  </span>
          
                )}     

</div>
            ))}


           <div
                  style={{
                    display: "inline-block",
                    width: "770px",
                    marginRight: "8px",
                    marginLeft: "30px",
                    marginBottom: "25px"
                  }}
                >

        <div className="form-group ">
        <label className="col-form-label required"><b>QEmail ID</b></label>
        <input
         className="form-control mb-2 mr-sm-2"
         type="email"
         onChange={(e) => {
                    this.setState({
                       email   : e.target.value} )  
                    }}
         placeholder={"firstname.lastname@quantiphi.com"}
         required
         value={this.state.email}
          />
        </div>
        </div>
           
          <i
            className="fa fa-info-circle fa-lg"
            style={{ color: "black" }}
            title="Please enter quantiphi email-Id"
          ></i>  
          
        
     
        <div className="d-flex justify-content-between ml-4 mb-3">
           <button
            type="button"
            onClick={this.handleClearForm1.bind(this)}
            className="btn btn-outline-warning"
          >
            Reset
          </button>
        </div>
            
     </form>
     </div>
    
     
        );

    }


}


export default FormComponent1