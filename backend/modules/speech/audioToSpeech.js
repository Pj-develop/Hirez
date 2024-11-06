import dotenv from "dotenv";
// import { runOpenAIRequest } from "../openai/ai.js";
import fs from "fs";
import sdk from "microsoft-cognitiveservices-speech-sdk";

dotenv.config();

const speechConfig = sdk.SpeechConfig.fromSubscription(
  process.env.SPEECH_KEY,
  process.env.SPEECH_REGION
);

const fromFile = async (audioPath) => {
  let out = "";

  speechConfig.speechRecognitionLanguage = "en-US";
  let audioConfig = await sdk.AudioConfig.fromWavFileInput(
    fs.readFileSync(audioPath)
  );
  let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  try {
    const result = await new Promise((resolve, reject) => {
      speechRecognizer.recognizeOnceAsync(resolve, reject);
    });
    switch (result.reason) {
      case sdk.ResultReason.RecognizedSpeech:
        console.log(`RECOGNIZED: Text=${result.text}`);
        // await runOpenAIRequest(result.text);
        out = await result.text;
        break;
      case sdk.ResultReason.NoMatch:
        console.log("NOMATCH: Speech could not be recognized.");
        break;
      case sdk.ResultReason.Canceled:
        const cancellation = sdk.CancellationDetails.fromResult(result);
        console.log(`CANCELED: Reason=${cancellation.reason}`);
        if (cancellation.reason === sdk.CancellationReason.Error) {
          console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
          console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
          console.log(
            "CANCELED: Did you set the speech resource key and region values?"
          );
        }
        break;
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    speechRecognizer.close();
  }
  return out;
};
//pass the pass of audio filepath as a argument.
//use .wav file for this
// export {fromFile };

export default fromFile;
