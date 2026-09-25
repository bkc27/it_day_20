const { getStudent, createStudent } = require("../controllers/studentController");
const express = require("express");
const router = express.Router();

router.get("/",getStudent);
router.post("/",createStudent);

module.exports = router;