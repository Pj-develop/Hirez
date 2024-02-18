/*
  This code sample shows Prebuilt Read operations with the Azure Form Recognizer client library. 

  To learn more, please visit the documentation - Quickstart: Document Intelligence (formerly Form Recognizer) SDKs
  https://learn.microsoft.com/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api?pivots=programming-language-javascript
*/

import {
  AzureKeyCredential,
  DocumentAnalysisClient,
} from "@azure/ai-form-recognizer";
import { config } from "dotenv";
import fs from "fs";
import runOpenAIRequest from "../openai/ai.js";

config();

function* getTextOfSpans(content, spans) {
  for (const span of spans) {
    yield content.slice(span.offset, span.offset + span.length);
  }
}

/*
  Remember to remove the key from your code when you're done, and never post it publicly. For production, use
  secure methods to store and access your credentials. For more information, see 
  https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-security?tabs=command-line%2Ccsharp#environment-variables-and-application-configuration
*/
const key = process.env.DOC_KEY;
const endpoint = process.env.DOC_ENDPOINT;

async function main(path) {
  const readStream = fs.createReadStream(path);

  // create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
  const client = new DocumentAnalysisClient(
    endpoint,
    new AzureKeyCredential(key)
  );
  const poller = await client.beginAnalyzeDocument("prebuilt-read", readStream);

  const { pages, languages, styles } = await poller.pollUntilDone();

  let concatenatedText = ""; // Initialize an empty string to concatenate all words

  if (pages.length <= 0) {
    console.log("No pages were extracted from the document.");
  } else {
    for (const page of pages) {
      for (const line of page.lines) {
        for (const word of line.words()) {
          concatenatedText += word.content + " "; // Concatenate each word with a space
        }
      }
    }
  }

  // if (concatenatedText === "") {
  //   console.log("No words were extracted from the document.");
  // } else {
  //   console.log("Concatenated Text:");
  //   console.log(concatenatedText);
  // }

  // // if (languages.length <= 0) {
  //   console.log("No language spans were extracted from the document.");
  // } else {
  // console.log("Languages:");
  // for (const languageEntry of languages) {
  //   console.log(
  //     `- Found language: ${languageEntry.languageCode} (confidence: ${languageEntry.confidence})`
  //   );
  //   for (const text of getTextOfSpans(
  //     concatenatedText,
  //     languageEntry.spans
  //   )) {
  //     const escapedText = text.replace(/\r?\n/g, "\\n").replace(/"/g, '\\"');
  //     console.log(`  - "${escapedText}"`);
  //   }
  // }
  // }

  if (styles.length <= 0) {
    console.log("No text styles were extracted from the document.");
  } else {
    console.log("Styles:");
    for (const style of styles) {
      console.log(
        `- Handwritten: ${style.isHandwritten ? "yes" : "no"} (confidence=${
          style.confidence
        })`
      );
    }
  }
  return concatenatedText;
}
// main("server/modules/azure/Business_Resume.docx.pdf")
export default main;
//this reads all the files and converts it into text
