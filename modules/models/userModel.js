import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    phoneNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//#region Signup

userSchema.statics.signup = async function (name, email, password, phoneNo) {
  if (!email || !phoneNo || !password) {
    throw Error("All fields are mandatory");
  }

  // Check if the email or phone number already exists
  const existEmail = await this.findOne({ email });
  const existPhone = await this.findOne({ phoneNo });

  // If email or phone number already exists, throw an error
  if (existEmail) {
    throw new Error("Email is already in use");
  }

  if (existPhone) {
    throw new Error("Phone number is already in use");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = await this.create({
    name,
    email,
    password: hashedPassword,
    phoneNo,
  });

  return newUser;
};

//#endregion

//#region Login

userSchema.statics.loginUser = async function (email, password) {
  if (!password || !email) {
    throw Error("Email and password are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("No such user exists");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Incorrect Password");
  }

  return user;
};

//#endregion

const User = mongoose.model("User", userSchema);

export { User};
