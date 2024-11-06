import React, { Component } from "react";
import "./file.css";

class FileBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { file } = this.state;

    if (file) {
      const formData = new FormData();
      formData.append("pdfFile", file, "cv.pdf");

      fetch("/api/file", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("File sent to the backend successfully.");

            // You can handle further actions upon successful response
          } else {
            console.error("Failed to send file to the backend.");
          }
        })
        .catch((error) => {
          console.error("Error while sending file to the backend:", error);
        });
    } else {
      console.error("No file selected.");
    }
  };

  render() {
    return (
      <div className="File">
        <form onSubmit={this.handleSubmit}>
          <h1> File Upload</h1>
          <h3>
            {" "}
            Upload Your Resume to Analyze your Resume By Our Artificial
            Intelligence
          </h3>
          <label for="uploadFile" className="btn btn-success">
            <i className="bi bi-cloud-upload"></i> Upload File
            <input
              type="file"
              class="form-control-file d-none"
              id="uploadFile"
              onChange={this.handleChange}
            ></input>
          </label>

          {/* <button type="submit">Upload</button> */}
        </form>
      </div>
    );
  }
}

export default FileBot;
