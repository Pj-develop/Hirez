//#region require
import mongoose from "mongoose";
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
    expectedSalary: {
      minSalary: {
        type: Number,
        required: [true, "Minimum salary is required"],
      },
      maxSalary: {
        type: Number,
        required: [true, "Maximum salary is required"],
      },
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
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    numberOfVacanciesAvailable: {
      type: Number,
      required: [true, "Number of vacancies available is required"],
    },
    // You can add more fields as needed
  },
  { timestamps: true }
);

const Vacancy = mongoose.model("Vacancy", VacancySchema);
export {Vacancy};