const routes = require("express").Router();
const Product = require("../models/Product");
const path = require("path");

routes.get("/", (req, res)=>{
    Product.find({}, (err, result)=>{
        res.send(result);
    })
})

routes.get("/lastproduct", (req, res)=>{
    Product.find({}).sort({ _id : -1 }).limit(1).exec((err, result)=>{
        res.send(result);
    })  
})


routes.get("/:id", (req, res)=>{
    var id = req.params.id;
    Product.find({_id:id}, (err, result)=>{
        res.send(result[0]);
    })
})



routes.post("/", (req, res)=>{

    
    var data = JSON.parse(req.body.data);
    var image = req.files.image;
    
    image.mv(path.resolve()+"/assets/pro-img/"+image.name, (err)=>{
        if(err){
            console.log(err);
            return;
        }

        Product.create(data, (err)=>{
            res.send({ success : true });
        })
    });
   
    
})
routes.put("/:id", (req, res)=>{
    var id = req.params.id;
    Product.updateMany({_id:id}, req.body, (err)=>{
        res.send({ success : true });
    })
})
routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
    Product.deleteMany({_id:id}, (err)=>{
        res.send({ success : true });
    })
})


module.exports = routes;


// localhost:3000/api/product