const express = require("express");
const router = express.Router();

const {
  login,
  signUp,
} = require("../modules/controller/CompanyLoginRegister");

//#region Login

router.post("/login", login);

//#endregion

//#region signup

router.post("/signup", signUp);

//#endregion

module.exports = router;