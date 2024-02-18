// Import necessary modules
import express from "express";
import multer from "multer";
import audioToSpeech from "../speech/audioToSpeech.js";
import runOpenAIRequest from "../openai/ai.js";
// Create an instance of Express
const app = express();

// Configure multer to store uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, "recording.wav"); // Uploaded files will be named 'recording.wav'
  },
});

// Create multer instance
const upload = multer({ storage: storage });

// Route to handle file upload
app.post("/", upload.single("audioFile"), async (req, res) => {
  // console.log("File uploaded successfully.");
  // let response = await audioToSpeech("./uploads/recording.wav");
  // console.log(response);
  // response = await runOpenAIRequest(response);

  res
    .status(200)
    .setHeader("Content-Type", "text/plain")
    .send({ text: "helo i m fine " });
  console.log({ text: "file to text response sent " });
});

// Serve static files from the 'uploads' directory
app.use("/", express.static(new URL("uploads/", import.meta.url).pathname));

export default app;
