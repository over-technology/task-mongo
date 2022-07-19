const express = require("express");
const {
  getAllEmployee,
  addNewEmployee,
  findOneEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controller/employee.contoller");

const router = express.Router();

router.post("/", addNewEmployee);
router.get("/", getAllEmployee);
router.get("/:id", findOneEmployee);
router.delete("/:id", deleteEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
