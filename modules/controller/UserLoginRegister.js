import { User } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "5d" });
};

//#region Login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Call the loginUser static method defined in your schema
    const user = await User.loginUser(email, password);

    // creating a token
    const token = createToken(user._id);

    res.json({ email: user.email, token, accountType: "user", Id: user._id }); // Added accountType
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

const signUp = async (req, res) => {
  try {
    const { name, phoneNo, email, password } = req.body;
    const newUser = await User.signup(name, email, password, phoneNo);

    // creating a token
    const token = createToken(newUser._id);

    res.json({
      email: newUser.email,
      token,
      accountType: "user",
      Id: newUser._id,
    }); // Fixed typo here
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

export { loginUser, signUp, getSingleUser };
