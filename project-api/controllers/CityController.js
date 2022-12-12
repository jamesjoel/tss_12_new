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
routes.get("/pagination/:a", (req, res)=>{
    var a = req.params.a;
    // City.find({}, (err, result)=>{
    //     res.send(result);
    // })
    City.find({}).limit(a).exec((err, result)=>{
        res.send(result);
    })
})
//http://localhost:3000/api/city/count
routes.get("/count", (req, res)=>{
    City.count((err, result)=>{
        // console.log(result);
        res.send({ total : result });
    })
})
// localhost:3000/city/pages/5/100
// localhost:3000/city/pages/7/100
// localhost:3000/city/pages/3/50
// localhost:3000/city/pages/1/100

routes.get("/pages/:pageno/:rec", (req, res)=>{
    var pageno = req.params.pageno; // 3
    var rec = req.params.rec; // 100

    var a = (pageno-1)*rec;




    City.find({}).skip(a).limit(rec).exec((err, result)=>{
        res.send(result);
    })
})



/*

.find().skip(400).limit(100).exec()

*/




routes.get("/demo", (req, res)=>{
    City.find({ state : "Telangana"}, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    })
})

module.exports = routes;