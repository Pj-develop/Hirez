import React, { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import axios from "axios";

function Mic() {
  const [recordState, setRecordState] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [response, setResponse] = useState(null);

  const start = () => {
    setRecordState(RecordState.START);
  };

  const stop = () => {
    setRecordState(RecordState.STOP);
  };

  const onStop = (audioData) => {
    console.log("audioData", audioData);
    setAudioData(audioData);
  };

  const sendRecordingToBackend = () => {
    if (audioData) {
      const formData = new FormData();
      formData.append("audioFile", audioData.blob, "recording.wav");

      axios
        .post("/api/mic", formData)
        .then((response) => {
          console.log("Recording sent to the backend successfully.");
          setResponse(response); // Access data directly, no need for .json()
        })
        .catch((error) => {
          console.error("Error while sending recording to the backend:", error);
        });
    }
  };

  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={sendRecordingToBackend}>Send Recording</button>
      {response && (
        <div>
          {response.data && <p>Data: {response.data}</p>}
          <p>Status: {response.status}</p>
        </div>
      )}
    </div>
  );
}

export default Mic;
