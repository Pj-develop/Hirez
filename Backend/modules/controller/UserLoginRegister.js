const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "5d" });
};

//#region Login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    // Match password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error("Invalid password");
    }

    // creating a token
    const token = createToken(user._id);

    res.json({ email: user.email, token, accountType: "user" }); // Added accountType
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

//#region Signup

const signUp = async (req, res) => {
  try {
    const { name, phoneNo, email, password } = req.body;
    const newUser = await User.create({ name, email, password, phoneNo });

    // creating a token
    const token = createToken(newUser._id);

    res.json({ email: newUser.email, token, accountType: "user" }); // Added accountType
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

//#region Get Single User by ID

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json({ user, accountType: "user" }); // Added accountType
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//#endregion

module.exports = { loginUser, signUp, getSingleUser };
