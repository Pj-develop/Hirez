//write the discription of functions here
//example description

const functionDescription = [
  {
    name: "writeFile",
    description: "write the asked content by user into text file",
    parameters: {
      type: "object",
      properties: {
        content: {
          type: "string",
          description: "content that user wants to write",
        },
      },
    },
    required: ["content"],
  },
  {
    name: "getAllVacancies",
    description:
      "Search for vacancies which are open for applicants note don't send application id. Unit of Expected Salary: is Rs ",
  },
];

export { functionDescription };
