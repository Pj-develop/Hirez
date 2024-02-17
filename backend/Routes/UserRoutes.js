import express from "express";
const router = express.Router();

import { loginUser, signUp } from "../modules/controller/UserLoginRegister.js";

//#region Login

router.post("/login", loginUser);

//#endregion

//#region signup

router.post("/signup", signUp);

//#endregion

export default router;
