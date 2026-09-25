const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { roll, name, course } = req.body;
    const student = await Student.create({ roll, name, course });
    res.status(201).json({
      message: "Record Saved",
      data: student,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      message: "All Records",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch Record",
      error: error.message,
    });
  }
};

const getStudentByRoll = async (req, res) => {
  try {
    const { roll } = req.params;
    const student = await Student.findOne({ roll });
    if (!student) {
      return res.status(404).json({
        message: "Invalid Roll No",
      });
    }
    res.status(200).json({
      message: "Record Found",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch data",
      error: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({
        message: "Invalid ID, NO Records",
      });
    }
    res.status(200).json({
      message: "Record Fetched",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch by id",
      error: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(403).json({
        message: "Unable to Update, Invalid ID",
      });
    }
    res.status(200).json({
      message: "Record Updated",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to Updata Data",
      error: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      message: "Record Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to Delete",
    });
  }
};

module.exports = {
  createStudent,
  getStudent,
  getStudentByRoll,
  getStudentById,
  updateStudent,
  deleteStudent
};
