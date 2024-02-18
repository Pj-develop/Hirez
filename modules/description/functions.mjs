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
    name: "getUsersAi",
    description:
      "Get Applicant's details score in interview, email, name, phoneNo., Disclamer: don't send password",
  },
  {
    name: "email",
    description:
      "takes emails from database of applicants and sends the email to the asked applicant ",
    parameters: {
      type: "object",
      properties: {
        subject: {
          type: "string",
          description: "subject of the email",
        },
        emailAddress: {
          type: "string",
          description:
            "get email from getUsersAi function (be specific no examples)",
        },

        Body: {
          type: "string",
          description:
            "body of the email that user wants to write and enhace the body, add your content too.",
        },
      },
    },
    required: ["Body", "email", "subject"],
  },
  {
    name: "getAllVacancies",
    description:
      "Search for vacancies which are open for applicants note don't send application id. Unit of Expected Salary: is Rs ",
  },
];

export { functionDescription };
