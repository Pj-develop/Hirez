const express = require("express");
const router = express.Router();
const {
  createVacancy,
  getAllVacancies,
} = require("../modules/controller/VacancyController");

// Route to create a new vacancy
router.post("/create", createVacancy);

// Route to get all available vacancies
router.get("/", getAllVacancies);

module.exports = router;
