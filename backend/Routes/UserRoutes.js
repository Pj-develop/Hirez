const express = require("express");
const router = express.Router();

const {
  loginUser,
  signUp,
} = require("../modules/controller/UserLoginRegister");

//#region Login

router.post("/login", loginUser);

//#endregion

//#region signup

router.post("/signup", signUp);

//#endregion

module.exports = router;
