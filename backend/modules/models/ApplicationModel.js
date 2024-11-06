import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ApplicationSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
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

export { Application };
