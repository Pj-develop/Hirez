import React, { Component } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import axios from "axios";

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

      // Use Axios to make the POST request
      axios
        .post("/api/mic", formData)
        .then((response) => {
          console.log("Recording sent to the backend successfully.");
          console.log(response);
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
        {/* Add your output here */}
      </div>
    );
  }
}

export default Mic;
