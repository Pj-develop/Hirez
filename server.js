import express, { application } from "express";
import cors from "cors"; // Import the cors package
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./Routes/UserRoutes.js";
import vacanciesRoutes from "./Routes/VacanciesRoutes.js";
import companyRoute from "./Routes/CompanyRoutes.js";
import applicationRoute from "./Routes/ApplicationRoutes.js";
import bot from "./modules/bot/bot.js";
import mic from "./modules/bot/mic.js";
import file from "./modules/bot/file.js";

const app = express();
const PORT = process.env.PORT || 4001;

dotenv.config();
app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS

app.use((req, res, next) => {
  console.log(req.path, req.method, req.body);
  next();
});

// Connection to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB Connected & Backend App working on " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRoute);
app.use("/api/vacancy", vacanciesRoutes);
app.use("/api/company", companyRoute);
app.use("/api/vacancy", applicationRoute);
app.use("/api/bot", bot);
app.use("/api/mic", mic);
app.use("/api/file", file);
