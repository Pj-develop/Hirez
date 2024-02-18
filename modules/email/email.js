import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const mail = (subject, emailAddress, Body) => {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.RESPONSE_MAIL,
      pass: process.env.RESPONSE_MAILPASS,
    },
  });

  const mailDetails = {
    from: "ppjj4047@gmail.com",
    to: emailAddress,
    subject: subject,
    text: Body,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
  return JSON.stringify({ emailAddress: emailAddress });
};
export default mail;
