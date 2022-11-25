const routes = require("express").Router();
const City = require("../models/City");

routes.post("/", (req, res)=>{
    // console.log(req.body);
    var x = req.body.statename;
    City.find({ state : x }, (err, result)=>{
        res.send(result);
    })
})
routes.get("/state", (req, res)=>{
    City.find({}).distinct("state", (err, result)=>{
        res.send(result);
    })
})
routes.get("/demo", (req, res)=>{
    City.find({ state : "Telangana"}, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

module.exports = routes;