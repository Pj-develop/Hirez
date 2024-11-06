import mongoose from "mongoose"; 
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    yearOfEstablishment: {
      type: Number,
      required: true,
    },
    fieldsOfWork: {
      type: [String],
      required: true,
    },
    ShortDescription: {
        type: [String],
        required: true,
      },
  },
  { timestamps: true }
);

//#region Signup

companySchema.statics.signup = async function (companyName, email, password, yearOfEstablishment, fieldsOfWork) {
  if (!companyName || !email || !password || !yearOfEstablishment || !fieldsOfWork) {
    throw Error("All fields are mandatory");
  }

  // Check if the email already exists
  const existEmail = await this.findOne({ email });

  // If email already exists, throw an error
  if (existEmail) {
    throw new Error("Email is already in use");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new company
  const newCompany = await this.create({
    companyName,
    email,
    password: hashedPassword,
    yearOfEstablishment,
    fieldsOfWork,
  });

  return newCompany;
};

//#endregion

//#region Login

companySchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password are required");
  }

  const company = await this.findOne({ email });

  if (!company) {
    throw new Error("No company found with this email");
  }

  const match = await bcrypt.compare(password, company.password);

  if (!match) {
    throw new Error("Incorrect password");
  }

  return company;
};

//#endregion

const Company = mongoose.model("Company", companySchema);

export {Company};
