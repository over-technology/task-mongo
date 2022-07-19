const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db.config");
const app = express();

//require routes
const employeeRouter = require("./routes/employee.router");

//configuration
app.use(express.json());
//rotes
app.use("/employee", employeeRouter);

dbConnection();
//app listing
app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
