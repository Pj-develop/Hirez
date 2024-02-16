const express = require("express");
const cors = require("cors"); // Import the cors package
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Routes/UserRoutes");
const vacanciesRoutes = require("./Routes/VacanciesRoutes");
const companyRoute = require("./Routes/CompanyRoutes");

const PORT = process.env.PORT || 4001;

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
