const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

const app = express();
app.use(express.json());
connectDB();
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students",studentRoutes);
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server started at http://localhost:"+PORT)
})