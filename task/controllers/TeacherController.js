const routes = require("express").Router();
const Teacher = require("../models/Teacher");

// I m creating REST Full API for Teacher

routes.post("/", (req, res)=>{
    Teacher.create(req.body, (err)=>{
        console.log(req.body);
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})

routes.get("/", (req, res)=>{
    Teacher.find({}, (err, result)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send(result);
    })
})
routes.get("/:id", (req, res)=>{
    const id = req.params.id;
    Teacher.find({_id : id}, (err, result)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send(result[0]);
    })
})
routes.put("/:id", (req, res)=>{
    const id = req.params.id;
    Teacher.updateMany({_id : id }, req.body, (err)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})
routes.delete("/:id", (req, res)=>{
    const id = req.params.id;
    Teacher.deleteMany({_id : id}, (err)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})



module.exports = routes;