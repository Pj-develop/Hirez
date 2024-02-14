const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
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
  },
  { timestamps: true }
);

//#region signup

userSchema.statics.signup = async function (username, email, password) {
  if (!email || !username || !password) {
    throw Error("All feilds are mendatory");
  }

  // Check if the email or username already exists
  const existEmail = await this.findOne({ email });
  const existUsername = await this.findOne({ username });

  // If email or username already exists, throw an error
  if (existEmail) {
    throw new Error("Email is already in use");
  }

  if (existUsername) {
    throw new Error("Username is already taken");
  }

  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Weak Password");
  // }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = await this.create({
    username,
    email,
    password: hashedPassword,
  });

  return newUser;
};

//#endregion

//#region Login

userSchema.statics.loginUser = async function (username, email, password) {
  if (!password || (!email && !username)) {
    throw Error("At least provide an email or username and password");
  }

  let field;
  if (email) {
    if (!validator.isEmail(email)) {
      throw Error("Invalid email address");
    }
    field = email;
  }
  if (username) {
    field = username;
  }

  const user = await this.findOne({ $or: [{ email }, { username }] });

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

module.exports = User;
