const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECREAT, { expiresIn: "5d" });
};

//#region Login

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Call the login function with appropriate parameters
    const user = await User.loginUser(username, email, password);

    // creating a token
    const token = createToken(user._id);

    res.json({ email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

//#region signup

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.signup(username, email, password);

    // creating a token
    const token = createToken(newUser._id);

    res.json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

module.exports = { loginUser, signUp };
