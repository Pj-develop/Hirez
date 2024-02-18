import express from "express";
import { dirname } from "path";
import runOpenAIRequest from "../openai/ai.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.post("/", async (req, res) => {
  try {
    let input = req.body.prompt;
    console.log(input);
    let result = await runOpenAIRequest(input);
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("An error occurred.");
    console.error("Error while sending response: ", error);
  }
});

export default app;
