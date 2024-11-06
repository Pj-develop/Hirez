import { Company } from "../models/companyModel.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "5d" });
};

//#region Login

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Call the login function with appropriate parameters
    const company = await Company.login(email, password);

    // creating a token
    const token = createToken(company._id);
    const Id = company._id.toString();

    res.json({ email, token, Id: Id, accountType: "company" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

//#region signup

const signUp = async (req, res) => {
  try {
    const { companyName, email, password, yearOfEstablishment, fieldsOfWork } =
      req.body;
    const newCompany = await Company.signup(
      companyName,
      email,
      password,
      yearOfEstablishment,
      fieldsOfWork
    );

    // creating a token
    const token = createToken(newCompany._id);

    res.json({ email, token, Id: newCompany._id, accountType: "company" }); // Added accountType
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//#endregion

export { login, signUp };
