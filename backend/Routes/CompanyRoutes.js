import express from "express";
const router = express.Router();

import {
  login,
  signUp,
}  from "../modules/controller/CompanyLoginRegister.js";

//#region Login

router.post("/login", login);

//#endregion

//#region signup

router.post("/signup", signUp);

//#endregion

export default router;