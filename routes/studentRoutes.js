const { getStudent, createStudent, getStudentByRoll, getStudentById, updateStudent, deleteStudent } = require("../controllers/studentController");
const express = require("express");
const router = express.Router();

router.get("/",getStudent);
router.post("/",createStudent);
router.get("/roll/:roll",getStudentByRoll);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent)

module.exports = router;