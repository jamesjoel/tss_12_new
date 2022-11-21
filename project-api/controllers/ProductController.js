const routes = require("express").Router();
const Product = require("../models/Product");
const path = require("path");
const rand = require("random-string");


routes.get("/", (req, res)=>{
    Product.find({}, (err, result)=>{
        var newresult = result.map(a=>{
            
            a.image = "http://localhost:3000/pro-img/"+a.image;
            return a;            
            
        })
        res.send(newresult);
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

    const rand_str = rand({length:30});
    var data = JSON.parse(req.body.data);
    
    
    var image = req.files.image;
    var arr = image.name.split(".");
    var ext = arr[arr.length-1];
    var newname = rand_str+"."+ext;

    
    
    data.image = newname;
    image.mv(path.resolve()+"/assets/pro-img/"+newname, (err)=>{
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