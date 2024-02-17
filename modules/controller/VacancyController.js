import {Vacancy} from "../models/VacancyModel.js";

const createVacancy = async (req, res) => {
  try {
    const newVacancy = new Vacancy(req.body);
    await newVacancy.save();
    res.status(201).json({
      success: true,
      message: "Vacancy created successfully",
      vacancy: newVacancy, // Remove the unnecessary object wrapping
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create vacancy",
      error: error.message,
    });
  }
};

const getAllVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find({ status: "open" }).populate(
      "company"
    );
    res.status(200).json({ success: true, vacancies: vacancies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancies",
      error: error.message,
    });
  }
};

const getVacancyById = async (req, res) => {
  try {
    const vacancyId = req.params.id;
    const vacancy = await Vacancy.findById(vacancyId).populate("company");
    if (!vacancy) {
      return res.status(404).json({
        success: false,
        message: "Vacancy not found",
      });
    }
    res.status(200).json({
      success: true,
      vacancy: vacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancy",
      error: error.message,
    });
  }
};

const getAllVacanciesForCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const vacancies = await Vacancy.find({
      company: companyId,
      status: "open",
    }).populate("company");
    res.status(200).json({ success: true, vacancies: vacancies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch vacancies for the company",
      error: error.message,
    });
  }
};

const deleteVacancy = async (req, res) => {
  try {
    const vacancyId = req.params.id;
    const deletedVacancy = await Vacancy.findByIdAndDelete(vacancyId);
    if (!deletedVacancy) {
      return res.status(404).json({
        success: false,
        message: "Vacancy not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Vacancy deleted successfully",
      vacancy: deletedVacancy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete vacancy",
      error: error.message,
    });
  }
};

export{
  createVacancy,
  getAllVacancies,
  getVacancyById,
  deleteVacancy,
  getAllVacanciesForCompany,
}
