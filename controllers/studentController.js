const Student = require("../models/Student")

const createStudent = async (req, res) => {
    try {
        const { roll, name, course } = req.body;
        const student = await Student.create({ roll, name, course });
        res.status(201).json({
            message: "Record Saved",
            data: student
        })
    } catch (error) {
        console.log(error);
    }
};

const getStudent = async (req,res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            message:"All Records",
            data:students
        })
    } catch (error) {
        res.status(500).json({
            message:"Unable to fetch Record",
            error: error.message
        })
    }
 };

// const getSingleStudent = () => {};

// const updateStudent = () => { };

// const deleteStudent = () => { };

module.exports = { createStudent, getStudent }