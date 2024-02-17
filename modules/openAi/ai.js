
import dotenv from "dotenv";
import OpenAI from "openai";
import {writeFile} from "../functions/functions.js";
import {functionDescription} from "../description/functions.mjs";

dotenv.config();
const funcDes = functionDescription;
const runOpenAIRequest = async (Input) => {
    console.log("run Open Ai called ");
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    let messages = [
      {
        role:"system", 
        content: process.env.CONTENT,
      },
      {
        role: process.env.USER_ROLE,
        content: Input,
      }
    ];
  
    try {
      console.log("Sending request to OpenAI API...");
      var response = await openai.chat.completions.create({
        model: process.env.MODEL,
        messages: messages,
        functions: funcDes,
      });
      let executedFunctions ={};
      while(
        response.choices[0].message.function_call &&
        response.choices[0].finish_reason !== "stop"
      ){
        let message = response.choices[0].message;
        let function_name = message.function_call.name;
        if(executedFunctions[function_name]){
          console.log(`Function ${function_name} has already been executed. Skipping...`);
          break;
      }
      let function_response = "";
      switch(function_name){
        case "writeFile":
          let writeFileArgs = JSON.parse(message.function_call.arguments);
          function_response = await writeFile(writeFileArgs.content);
          break;
        default:
          throw new Error(`Unsupported function: ${function_name}`);
      } 
        executedFunctions[function_name] = true;
        messages.push({
          role: "function",
          name: function_name,
          content: function_response,
        });
        console.log(`Sending request to OpenAI with ${function_name} response...`);
        response = await openai.chat.completions.create({
          model: process.env.MODEL,
          messages: messages,
          functions: funcDes,
        });
      }
      response = await openai.chat.completions.create({
        model: process.env.MODEL,
        messages: messages,
        functions: funcDes,
      });
      console.log(response.choices[0].message);
      return response;
    }
    catch(error){
      console.error("Error:", error);
    }
  }

export { runOpenAIRequest };
