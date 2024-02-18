import React, { Component } from "react";

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
          <h1>React File Upload</h1>
          <input type="file" onChange={this.handleChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default FileBot;
