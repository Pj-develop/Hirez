import express from "express";
const router = express.Router();

import {
  createApplication,
  getApplicationsByVacancyId,
} from "../modules/controller/ApplicationController.js";

router.post("/apply/:userId/:vacancyId", createApplication);

router.post("/applications/:vacancyId", getApplicationsByVacancyId);

export default router;
