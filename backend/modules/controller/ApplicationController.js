// Import the Application model
import { Application } from "../models/ApplicationModel.js";

// Controller function to handle creating a new application
const createApplication = async (req, res) => {
  try {
    const { userId, vacancyId } = req.body;

    // Check if the application already exists in the database
    const existingApplication = await Application.findOne({
      userId,
      vacancyId,
    });
    if (existingApplication) {
      // If the application already exists, throw an error indicating it
      return res.status(400).json({ message: "Application already exists" });
    }

    // Create a new application instance
    const application = new Application({
      userId,
      vacancyId,
    });

    // Save the application to the database
    await application.save();

    // Respond with a success message and the created application details
    res
      .status(201)
      .json({ message: "Application created successfully", application });
  } catch (err) {
    // If an error occurs, respond with an error message
    console.error("Error creating application:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getApplicationsByVacancyId = async (req, res) => {
  try {
    // Extract the vacancyId from req.params
    const { vacancyId } = req.params;

    // Find all applications with the given vacancyId and populate user information
    const applications = await Application.find({ vacancyId }).populate(
      "userId"
    );

    // Respond with the list of applications
    res.status(200).json({ applications });
  } catch (err) {
    // If an error occurs, respond with an error message
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export { createApplication, getApplicationsByVacancyId };
