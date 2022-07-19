const { getlimit, getOffset, getPage } = require("../helpers/App.herlper");
const EmoployeeModel = require("../models/employee.model");

//list all employee
const getAllEmployee = async (req, res) => {
  let query = req.query?.querySearch
    ? { name: { $regex: `${req.query.querySearch}`, $options: "i" } }
    : {};
  const limit = getlimit(req.query?.limit);
  const offset = getOffset(req.query?.limit, req.query?.page);
  const page = getPage(req.query?.page);
  const allEmployees = await EmoployeeModel.find(
    query,
    {},
    { limit: limit, skip: offset }
  );
  return res.status(200).json({
    data: allEmployees,
    count: allEmployees.length,
    offset,
    limit,
    page,
  });
};
//add new employee
const addNewEmployee = async (req, res) => {
  const { email, name, age } = req.body;

  const createdEmp = await EmoployeeModel.create({ age, name, email });
  console.log(createdEmp);
  const created = await createdEmp.save();
  return res.status(200).json({ created });
};
//find one  employee
const findOneEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(200).json({ message: "params should be included" });
    const employee = await EmoployeeModel.findOne({
      _id: id,
    });
    if (!employee)
      return res.status(400).json({ message: "employee not found" });
    return res.status(200).json({ data: employee });
  } catch (error) {
    res.status(500);
  }
};
//delete one  employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(200).json({ message: "params should be included" });
  const employee = await EmoployeeModel.findOne({
    _id: id,
  });
  if (!employee) return res.status(400).json({ message: "employee not found" });
  await employee.delete();
  return res.status(200).json({
    data: {
      message: "emplyee deleted successfully",
    },
  });
};
//update one  employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ message: "params should be included" });
  const employee = await EmoployeeModel.findOne({
    _id: id,
  });
  if (!employee) return res.status(400).json({ message: "employee not found" });
  const emp = await EmoployeeModel.findByIdAndUpdate(id, req.body);
  const updatedEmp = await EmoployeeModel.findById(emp.id);
  return res.status(200).json({
    data: {
      updatedEmp,
    },
  });
};
module.exports = {
  getAllEmployee,
  addNewEmployee,
  findOneEmployee,
  deleteEmployee,
  updateEmployee,
};
