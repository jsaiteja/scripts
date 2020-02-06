import React, { Component } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedFile: null, loaded: 0 };
  }
  onChangeHandler = event => {
    console.log(event.target.files);
    if (
      this.maxSelectedFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      this.setState({
        selectedFile: event.target.files,
        loaded: 0
      });
    }
  };
  checkMimeType = event => {
    let files = event.target.files;
    let err = "";

    const types = [
      "application/json",
      "application/octet-stream",
      "application/x-yaml",
      "application/yaml",
      "text/vnd.yaml",
      "application/pdf",
      "text/yaml",
      "text/x-yaml",
      "application/xml",
      "image/png",
      "image/jpeg",
      "image/gif"
    ];

    for (let x = 0; x < files.length; x++) {
      if (types.every(type => files[x].type !== type)) {
        err[x] += files[x].type + " is not a supported format\n";
      }
    }
    for (let z = 0; z < err.length; z++) {
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  checkFileSize = event => {
    let files = event.target.files;
    let size = 250000000;
    // let err = "";
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    // if (err !== "") {
    //   event.target.value = null;
    //   console.log(err);
    //   return false;
    // }
    for (let z = 0; z < err.length; z++) {
      toast.error(err[z]);
      event.target.value = null;
    }

    return true;
  };
  maxSelectedFile = event => {
    let files = event.target.files;
    if (files.length > 3) {
      const message = "Only 3 messages can be uploaded at a time";
      event.target.value = null;
      toast.warn(message);
      console.log(message);
      return false;
    }
    return true;
  };
  onClickHandler = e => {
    console.log(this.state.selectedFile);
    console.log(e.target.value);
    const data = new FormData();
    for (let x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }
    // data.append("myFile", this.state.selectedFile, this.state.selectedFile);
    console.log(data);

    axios
      .post("http://54.210.14.89:8000/serverinput", data, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded / progressEvent.total);
          this.setState({
            loaded: (progressEvent.loaded / progressEvent.total) * 100
          });
        }
      })
      .then(res => {
        console.log(res.statusText);
        toast.success("upload success");
      })

      .catch(err => {
        toast.error("upload fail");
      });
  };

  render() {
    return (
      <div>
        <input
          type="file"
          className="form-control"
          multiple
          onChange={this.onChangeHandler}
        />
        <br />
        <div className="form-group">
          <ToastContainer />
          <Progress max="100" color="success" value={this.state.loaded}>
            {Math.round(this.state.loaded, 2)}%
          </Progress>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={this.onClickHandler}
        >
          Upload
        </button>
      </div>
    );
  }
}

export default FileUpload;
