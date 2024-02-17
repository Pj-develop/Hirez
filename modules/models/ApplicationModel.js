import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema(
  {
    applicantName: {
      type: String,
      required: true,
    },
    applicantEmail: {
      type: String,
      required: true,
    },
    coverLetter: String,
    resume: {
      data: Buffer, // Store binary data of the file
      contentType: String, // Store the content type of the file (e.g., 'application/pdf')
    },
    status: {
      type: String,
      default: "Pending", // You can have statuses like 'Pending', 'Accepted', 'Rejected', etc.
    },
    vacancyId: {
      type: Schema.Types.ObjectId,
      ref: "Vacancy",
      required: true,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", ApplicationSchema);

export{Application};
