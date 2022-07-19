const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://husam:husam@task.cnast.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("db connected"))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
};

module.exports = dbConnection;
