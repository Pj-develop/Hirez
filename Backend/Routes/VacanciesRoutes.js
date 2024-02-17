const express = require("express");
const router = express.Router();
const {
  createVacancy,
  getAllVacancies,
  deleteVacancy,
  getVacancyById,
  getAllVacanciesForCompany,
} = require("../modules/controller/VacancyController");

// Route to create a new vacancy
router.post("/create", createVacancy);

// Route to get all available vacancies
router.get("/", getAllVacancies);

router.delete("/:id", deleteVacancy);

router.get("/:id", getVacancyById);

router.get("/company/:companyId/vacancies", getAllVacanciesForCompany);

module.exports = router;
