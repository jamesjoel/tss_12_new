const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./config/routes");
const upload = require("express-fileupload");
const { updateMany } = require("./models/Product");

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(upload());

app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})