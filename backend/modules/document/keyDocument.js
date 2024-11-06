/*
  This code sample shows Custom Model operations with the Azure Form Recognizer client library. 

  To learn more, please visit the documentation - Quickstart: Document Intelligence (formerly Form Recognizer) SDKs
  https://learn.microsoft.com/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api?pivots=programming-language-javascript
*/

import { AzureKeyCredential, DocumentAnalysisClient } from "@azure/ai-form-recognizer";
import { config } from "dotenv";
import {runOpenAIRequest} from "../openai/ai.js";
import fs from "fs";
config();
/*
* This sample shows how to analyze a document using a model with a given ID. The model ID may refer to any model,
* whether custom, prebuilt, composed, etc.
*
* @summary analyze a document using a model by ID
*/
async function main(path) {
    const readStream = fs.createReadStream(path);
  /*
    Remember to remove the key from your code when you're done, and never post it publicly. For production, use
    secure methods to store and access your credentials. For more information, see 
    https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-security?tabs=command-line%2Ccsharp#environment-variables-and-application-configuration
  */
  const endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "<endpoint>";
  const credential = new AzureKeyCredential(process.env.FORM_RECOGNIZER_API_KEY || "<api key>");
  const client = new DocumentAnalysisClient(endpoint, credential);

  const modelId = process.env.FORM_RECOGNIZER_CUSTOM_MODEL_ID || "<custom model ID>";

  const poller = await client.beginAnalyzeDocument(
    modelId,
    readStream
  );

  const {
    documents: [document],
  } = await poller.pollUntilDone();

  if (!document) {
    throw new Error("Expected at least one document in the result.");
  }

//   console.log(
//     "Extracted document:",
//     document.docType,
//     (confidence: ${document.confidence})
//   );
  console.log("Fields:", document.fields);
  await runOpenAIRequest(JSON.stringify(document.fields));

}
// main("modules/document/Business_Resume.docx.pdf")
export default main

//key value pair for document 