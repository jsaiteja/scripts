// import React, { Component } from "react";
// import SingleInput from "../components/SingleInput";
// import Select from "../components/Select";
// // import CheckboxOrRadioGroup from "../components/CheckboxOrRadioGroup";
// import FileUpload from "../components/oFileUpload";

// class FormComponent1 extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   render() {
//     // const {
//     //   projectName,
//     //   projectSelection,
//     //   urlName,
//     //   branchName,
//     //   userName,
//     //   passWord,
//     //   infraSelection,
//     //   email,
//     //   SelectedOptions,
//     //   TemplateSelectedOptionGcp,
//     //   TemplateSelectedOptionAws,
//     //   SourceProviderSelectionAws,
//     //   SourceProviderSelectionGcp,
//     //   TemplateUrlGcp,
//     //   TemplateUrlAws,
//     //   toggleShow,
//     //   handleEmailChange,
//     //   handleRepoPasswordChange,
//     //   handleClearForm,
//     //   handleinfraSelectionChange,
//     //   handleRepoUserNameChange,
//     //   handleBranchNameChange,
//     //   urlNameChange,
//     //   handleProjectTypeSelect,
//     //   handleProjectNameChange,
//     //   urlTempNameChange,
//     //   handleProviderSelection,
//     //   handleTemplateSelection,
//     //   handleCheckSelectionChange,
//     //   handleFormSubmit,
//     //   errors,
//     //   projectTypes,
//     //   infraOptions,
//     //   TemplateOptionsGcp,
//     //   TemplateOptionsAws,
//     //   SourceProvidersGcp,
//     //   SourceProvidersAws,
//     //   AvailableOptions,
//     //   hidden
//     // } = this.props;

//     return (
//       <>
//         <form
//           className="w-50 bg-light text-dark col-lg-6 offset-lg-3"
//           validate="true"
//           onSubmit={this.props.handleFormSubmit}
//           noValidate
//         >
//           <div
//             style={{
//               display: "inline-block",
//               width: "570px",
//               marginRight: "8px"
//             }}
//           >
//             <SingleInput
//               inputType={"text"}
//               title={"Project Name : "}
//               controlFunc={this.props.handleProjectNameChange}
//               content={this.props.projectName}
//               placeholder={" Enter project name"}
//             />
//           </div>
//           <i
//             className="fa fa-info-circle fa-lg"
//             style={{ color: "black" }}
//             title="Description about project Name"
//           ></i>
//           <div
//             style={{
//               display: "inline-block",
//               width: "570px",
//               marginRight: "8px"
//             }}
//           >
//             <Select
//               title={"Project Type :   "}
//               placeholder={"Select Project Type"}
//               controlFunc={this.props.handleProjectTypeSelect}
//               options={this.props.values.projectTypes}
//               selectedOption={this.props.values.projectSelection}
//             />
//           </div>
//           {console.log(this.props)}
//           <CheckboxOrRadioGroup
//             title={"Environment :"}
//             controlFunc={this.props.handleinfraSelectionChange}
//             type={"radio"}
//             options={this.props.values.infraOptions}
//             selectedOptions={this.props.values.infraSelection}
//           />
//           {this.props.infraSelection === "GCP" && (
//             <div>
//               <CheckboxOrRadioGroup
//                 title={"Template :"}
//                 controlFunc={this.props.handleTemplateSelection}
//                 type={"radio"}
//                 options={this.props.values.TemplateOptionsGcp}
//                 selectedOptions={this.props.values.TemplateSelectedOptionGcp}
//               />
//               <CheckboxOrRadioGroup
//                 title={"Source Provider :"}
//                 controlFunc={this.props.handleProviderSelection}
//                 type={"radio"}
//                 options={this.props.values.SourceProvidersGcp}
//                 selectedOptions={this.props.values.SourceProviderSelectionGcp}
//               />
//             </div>
//           )}
//           {this.props.infraSelection === "AWS" && (
//             <div>
//               <CheckboxOrRadioGroup
//                 title={"Template :"}
//                 controlFunc={this.props.handleTemplateSelection}
//                 type={"radio"}
//                 options={this.props.values.TemplateOptionsAws}
//                 selectedOptions={this.props.values.TemplateSelectedOptionAws}
//               />
//               <CheckboxOrRadioGroup
//                 title={"Source Provider :"}
//                 controlFunc={this.props.handleProviderSelection}
//                 type={"radio"}
//                 options={this.props.values.SourceProvidersAws}
//                 selectedOptions={this.props.values.SourceProviderSelectionAws}
//               />
//             </div>
//           )}
//           {this.props.values.SourceProviderSelectionGcp === "Local" &&
//             this.props.values.infraSelection === "GCP" && <FileUpload />}

//           {this.props.values.SourceProviderSelectionAws === "Local" &&
//             this.props.values.infraSelection === "AWS" && <FileUpload />}

//           {this.props.values.SourceProviderSelectionGcp === "Cloud Storage" &&
//             this.props.values.infraSelection === "GCP" && (
//               <div>
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "8px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={"text"}
//                     title={"GCP Template URL : "}
//                     controlFunc={this.props.urlTempNameChange}
//                     content={this.props.values.TemplateUrlGcp}
//                     placeholder={" Enter GCP Template URL"}
//                     noValidate
//                   />
//                 </div>
//                 <i
//                   className="fa fa-info-circle fa-lg"
//                   title="Description about Template url"
//                   style={{ color: "black" }}
//                 ></i>
//                 <br />

//                 {this.props.values.errors.urlGCP.length > 0 && (
//                   <span className="error">
//                     {this.props.values.errors.urlGCP}
//                   </span>
//                 )}
//               </div>
//             )}

//           {this.props.values.SourceProviderSelectionAws === "S3" &&
//             this.props.values.infraSelection === "AWS" && (
//               <div>
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "8px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={"text"}
//                     title={"AWS Template URL : "}
//                     controlFunc={this.props.urlTempNameChange}
//                     content={this.props.values.TemplateUrlAws}
//                     placeholder={" Enter AWS Template URL"}
//                     noValidate
//                   />
//                 </div>
//                 <i
//                   className="fa fa-info-circle fa-lg"
//                   title="Description about Template url"
//                   style={{ color: "black" }}
//                 ></i>
//                 <br />

//                 {this.props.values.errors.urls3.length > 0 && (
//                   <span className="error">
//                     {this.props.values.errors.urls3}
//                   </span>
//                 )}
//               </div>
//             )}

//           {(this.props.values.SourceProviderSelectionAws === "Git" &&
//             this.props.values.infraSelection === "AWS" && (
//               <div>
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "8px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={"text"}
//                     title={"Source code URL : "}
//                     controlFunc={this.props.urlNameChange}
//                     content={this.props.values.urlName}
//                     placeholder={" Enter Source code URL"}
//                     noValidate
//                   />
//                 </div>
//                 <i
//                   className="fa fa-info-circle fa-lg"
//                   title="Description about source code url"
//                   style={{ color: "black" }}
//                 ></i>
//                 <br />
//                 {this.props.values.errors.urlr.length > 0 && (
//                   <span className="error">{this.props.values.errors.urlr}</span>
//                 )}
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "8px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={"text"}
//                     title={"Source code Branch: "}
//                     controlFunc={this.props.handleBranchNameChange}
//                     content={this.props.values.branchName}
//                     placeholder={" Enter Source Code Branch"}
//                   />
//                 </div>
//                 <i
//                   className="fa fa-info-circle fa-lg"
//                   title="Description about source code branch"
//                   style={{ color: "black" }}
//                 ></i>

//                 <h4 style={{ marginTop: "10px" }}>
//                   <center>Source Provider Credentials</center>
//                 </h4>
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "8px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={"text"}
//                     title={"Username : "}
//                     controlFunc={this.props.handleRepoUserNameChange}
//                     content={this.props.values.userName}
//                     placeholder={" Enter repo username"}
//                   />
//                 </div>
//                 <i
//                   className="fa fa-info-circle fa-lg"
//                   title="Description about repo user name"
//                   style={{ color: "black" }}
//                 ></i>
//                 <div
//                   style={{
//                     display: "inline-block",
//                     width: "570px",
//                     marginRight: "4px"
//                   }}
//                 >
//                   <SingleInput
//                     inputType={this.props.hidden ? "password" : "text"}
//                     title={"Password : "}
//                     //   name={"name"}
//                     controlFunc={this.props.handleRepoPasswordChange}
//                     content={this.props.values.passWord}
//                     placeholder={" Enter repo password"}
//                     noValidate
//                   />
//                 </div>
//                 {/* <div style={{ display: "inline-block", marginLeft: "3px" }}> */}
//                 {this.props.values.hidden && (
//                   // <button onClick={toggleShow} width="2px" height="2px">
//                   <span onClick={this.props.toggleShow}>
//                     <i className="fa fa-eye errspan"></i>
//                   </span>

//                   // </button>
//                 )}
//                 {!this.props.values.hidden && (
//                   // <button onClick={toggleShow} width="2px" height="2px">
//                   <span onClick={this.props.toggleShow}>
//                     <i className="icon-eye-close errspan"></i>
//                   </span>
//                   // <i className="icon-eye-close"></i>
//                   // </button>
//                 )}
//                 {/* </div> */}
//                 {this.props.values.errors.passwordr.length > 0 && (
//                   <span className="error">
//                     {this.props.values.errors.passwordr}
//                   </span>
//                 )}
//               </div>
//             )) ||
//             (this.props.values.SourceProviderSelectionGcp === "Git" &&
//               this.props.values.infraSelection === "GCP" && (
//                 <div>
//                   <div
//                     style={{
//                       display: "inline-block",
//                       width: "570px",
//                       marginRight: "8px"
//                     }}
//                   >
//                     <SingleInput
//                       inputType={"text"}
//                       title={"Source code URL : "}
//                       controlFunc={this.props.urlNameChange}
//                       content={this.props.values.urlName}
//                       placeholder={" Enter Source code URL"}
//                       noValidate
//                     />
//                   </div>
//                   <i
//                     className="fa fa-info-circle fa-lg"
//                     title="Description about source code url"
//                     style={{ color: "black" }}
//                   ></i>
//                   <br />
//                   {this.props.values.errors.urlr.length > 0 && (
//                     <span className="error">
//                       {this.props.values.errors.urlr}
//                     </span>
//                   )}
//                   <div
//                     style={{
//                       display: "inline-block",
//                       width: "570px",
//                       marginRight: "8px"
//                     }}
//                   >
//                     <SingleInput
//                       inputType={"text"}
//                       title={"Source code Branch: "}
//                       controlFunc={this.props.handleBranchNameChange}
//                       content={this.props.values.branchName}
//                       placeholder={" Enter Source Code Branch"}
//                     />
//                   </div>
//                   <i
//                     className="fa fa-info-circle fa-lg"
//                     title="Description about source code branch"
//                     style={{ color: "black" }}
//                   ></i>
//                   {/* <div className="col-sm-12 col-form-label"> */}
//                   {/* <h5 style={{ marginLeft: "140px" }}>Source Repository Credentials</h5> */}
//                   {/* </div> */}
//                   <h4 style={{ marginTop: "10px" }}>
//                     <center>Source Provider Credentials</center>
//                   </h4>
//                   <div
//                     style={{
//                       display: "inline-block",
//                       width: "570px",
//                       marginRight: "8px"
//                     }}
//                   >
//                     <SingleInput
//                       inputType={"text"}
//                       title={"Username : "}
//                       controlFunc={this.props.handleRepoUserNameChange}
//                       content={this.props.values.userName}
//                       placeholder={" Enter repo username"}
//                     />
//                   </div>
//                   <i
//                     className="fa fa-info-circle fa-lg"
//                     title="Description about repo user name"
//                     style={{ color: "black" }}
//                   ></i>
//                   <div
//                     style={{
//                       display: "inline-block",
//                       width: "570px",
//                       marginRight: "4px"
//                     }}
//                   >
//                     <SingleInput
//                       inputType={this.props.hidden ? "password" : "text"}
//                       title={"Password : "}
//                       //   name={"name"}
//                       controlFunc={this.props.handleRepoPasswordChange}
//                       content={this.props.values.passWord}
//                       placeholder={" Enter repo password"}
//                       noValidate
//                     />
//                   </div>
//                   {/* <div style={{ display: "inline-block", marginLeft: "3px" }}> */}
//                   {this.props.values.hidden && (
//                     // <button onClick={toggleShow} width="2px" height="2px">
//                     <span onClick={this.props.toggleShow}>
//                       <i className="fa fa-eye errspan"></i>
//                     </span>

//                     // </button>
//                   )}
//                   {!this.props.values.hidden && (
//                     // <button onClick={toggleShow} width="2px" height="2px">
//                     <span onClick={this.props.toggleShow}>
//                       <i className="icon-eye-close errspan"></i>
//                     </span>
//                     // <i className="icon-eye-close"></i>
//                     // </button>
//                   )}
//                   {/* </div> */}

//                   {this.props.values.errors.passwordr.length > 0 && (
//                     <span className="error">
//                       {this.props.values.errors.passwordr}
//                     </span>
//                   )}
//                 </div>
//               ))}

//           <div
//             style={{
//               display: "inline-block",
//               width: "570px",
//               marginRight: "8px"
//             }}
//           >
//             <SingleInput
//               inputType={"email"}
//               title={"QEmail Id : "}
//               controlFunc={this.props.handleEmailChange}
//               content={this.props.values.email}
//               placeholder={"firstname.lastname@quantiphi.com"}
//               noValidate
//             />
//           </div>
//           <i
//             className="fa fa-info-circle fa-lg"
//             style={{ color: "black" }}
//             title="Please enter quantiphi email-Id"
//           ></i>
//           {this.props.values.errors.emailr.length > 0 && (
//             <span className="error">{this.props.values.errors.emailr}</span>
//           )}
//           <br />
//           <CheckboxOrRadioGroup
//             title={"Delivery Excellence :"}
//             controlFunc={this.props.handleCheckSelectionChange}
//             type={"checkbox"}
//             options={this.props.values.AvailableOptions}
//             selectedOptions={this.props.values.SelectedOptions}
//             style={{ display: "block" }}
//           />
//           {/* <div className="d-flex justify-content-between m-1"> */}
//           <button
//             type="button"
//             onClick={this.props.handleClearForm}
//             className="btn btn-outline-warning"
//           >
//             Reset
//           </button>
//           {/* <input
//               type="submit"
//               disabled={!isEnabled}
//               className="btn btn-outline-success"
//               value="Submit"
//             /> */}
//           {/* </div> */}

//           <button className="btn btn-primary" onClick={this.continue}>
//             Next »
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// export default FormComponent1;

// {
//   /* <div className="form-group ">
//             <label style={{ textAlign: "left" }}>
//               <strong>Project Name:</strong>
//             </label>
//             <input
//               className="form-control mb-2 mr-sm-2"
//               type="text"
//               placeholder="Enter project name here"
//               required
//             />
//           </div> */
// }

// {
//   /* <div className="col-sm-12 col-form-label"> */
// }
// {
//   /* <h5 style={{ marginLeft: "140px" }}>Source Repository Credentials</h5> */
// }
// {
//   /* </div> */
// }
