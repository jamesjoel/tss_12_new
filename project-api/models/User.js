const mongoose = require("mongoose");
require("../config/database");

const User = mongoose.Schema({
    name : String,
    password : String,
    email : String,
    address : String,
    city : String,
    state : String,
    gender : String,
    contact : String

})

module.exports = mongoose.model("user", User);