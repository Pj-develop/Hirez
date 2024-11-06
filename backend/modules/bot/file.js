// Import necessary modules
import express from "express";
import multer from "multer";
import ReadDocument from "../document/ReadDocument.js";
// Create an instance of Express
import runOpenAIRequest from "../openai/ai.js";
const app = express();

// Configure multer to store uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, "resume.pdf"); // Uploaded files will be named 'resume.pdf'
  },
});

// Create multer instance
const upload = multer({ storage: storage });

// Route to handle file upload
app.post("/", upload.single("pdfFile"), async (req, res) => {
  console.log("File uploaded successfully.");
  let response = await ReadDocument("./uploads/resume.pdf");
  console.log(response);
  response = await runOpenAIRequest(
    "find suitable vacancy for this resume " + response
  );
  res.status(200).send({ response });
  console.log("file to text response sent ");
});

// Serve static files from the 'uploads' directory
app.use("/", express.static(new URL("uploads/", import.meta.url).pathname));

export default app;
