import express from "express";
const router = express.Router();
import {
  createVacancy,
  getAllVacancies,
  deleteVacancy,
  getVacancyById,
  getAllVacanciesForCompany,
} from "../modules/controller/VacancyController.js";

// Route to create a new vacancy
router.post("/create", createVacancy);

// Route to get all available vacancies
router.get("/", getAllVacancies);

router.delete("/:id", deleteVacancy);

router.get("/:id", getVacancyById);

router.get("/company/:companyId", getAllVacanciesForCompany);

export default router;
