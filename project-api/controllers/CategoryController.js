const routes = require("express").Router();
const Category = require("../models/Category");

routes.post("/", (req, res)=>{
    Category.create(req.body, (err)=>{
        res.send({ success : true });
    });
})
routes.get("/", (req, res)=>{
    Category.find({}).sort({ name : 1}).exec((err, result)=>{
        res.send(result);
    });
})

module.exports = routes;