const routes = require("express").Router();
const Product = require("../models/Product");

routes.get("/", (req, res)=>{
    Product.find({}, (err, result)=>{
        res.send(result);
    })
})
routes.post("/", (req, res)=>{
    
    Product.create(req.body, (err)=>{
        res.send({ success : true });
    })
})


module.exports = routes;
