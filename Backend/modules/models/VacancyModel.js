//#region require
const mongoose = require("mongoose");
//#endregion

const Schema = mongoose.Schema;

const VacancySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    requirements: {
      type: [String],
      required: [true, "Requirements are required"],
    },
    responsibilities: {
      type: [String],
      required: [true, "Responsibilities are required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    deadline: {
      type: Date,
      required: [true, "Deadline is required"],
    },
    isRemote: {
      type: Boolean,
      default: false,
    },
    benefits: {
      type: [String],
    },
    skillsRequired: {
      type: [String],
      required: [true, "Skills required are required"],
    },
    // Reference to the CompanySchema
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company is required"],
    },
    // You can add more fields as needed
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacancy", VacancySchema);
