const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    require: true,
  },
});

const Emoployee = mongoose.model("Employees", EmployeeSchema);

module.exports = Emoployee;
