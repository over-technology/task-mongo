const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
    })
    .then(() => console.log("db connected"))
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
};

module.exports = dbConnection;
