import React, { Component } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

class Mic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recordState: null,
      audioData: null,
    };
  }

  start = () => {
    this.setState({
      recordState: RecordState.START,
    });
  };

  stop = () => {
    this.setState({
      recordState: RecordState.STOP,
    });
  };

  // Handle onStop callback to receive audio data
  onStop = (audioData) => {
    console.log("audioData", audioData);
    this.setState({ audioData });
  };

  // Function to save the recorded audio as a .wav file
  sendRecording = () => {
    const { audioData } = this.state;
    if (audioData) {
      const url = window.URL.createObjectURL(audioData.blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "recording.wav";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };
  sendRecordingToBackend = () => {
    const { audioData } = this.state;
    if (audioData) {
      // Create FormData object to send the file
      const formData = new FormData();
      formData.append("audioFile", audioData.blob, "recording.wav");

      // Make a fetch request to your backend endpoint
      fetch("/api/mic", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("Recording sent to the backend successfully.");
            // You can handle further actions upon successful response
          } else {
            console.error("Failed to send recording to the backend.");
          }
        })
        .catch((error) => {
          console.error("Error while sending recording to the backend:", error);
        });
    } else {
      console.error("No audio data to send.");
    }
  };

  render() {
    const { recordState } = this.state;

    return (
      <div>
        <AudioReactRecorder state={recordState} onStop={this.onStop} />

        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.sendRecordingToBackend}>Send Recording</button>
      </div>
    );
  }
}

export default Mic;
