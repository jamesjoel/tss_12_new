require("../config/database");
const mongoose = require("mongoose");

const Teacher = mongoose.Schema({
    name  : String,
    salary : Number,
    city : String,
    subject : String
})

module.exports = mongoose.model("teacher", Teacher);