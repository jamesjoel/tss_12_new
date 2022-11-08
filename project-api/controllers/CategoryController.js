const routes = require("express").Router();
const Category = require("../models/Category");
// localhost:3000/api/category

// insert
routes.post("/", (req, res)=>{
    Category.create(req.body, (err)=>{
        res.send({ success : true });
    });
})

// all category find
// localhost:3000/api/category
routes.get("/", (req, res)=>{
    Category.find({}).sort({ name : 1}).exec((err, result)=>{
        res.send(result);
    });
})

//// localhost:3000/api/category/124451245
routes.get("/:id", (req, res)=>{
    var id = req.params.id;
    Category.find({_id : id}).sort({ name : 1}).exec((err, result)=>{
        res.send(result);
    });
})

routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
    Category.deleteMany({_id : id}, (err)=>{
        
        res.send({ success : true });
    })
});

// update data
//localhost:3000/api/category/124451245
routes.put("/:id", (req, res)=>{
    var id = req.params.id;
    Category.updateMany({ _id : id }, req.body, (err)=>{

    })
})




module.exports = routes;