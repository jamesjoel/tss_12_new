const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/signup", (req, res)=>{
    
    delete req.body.re_password;

    req.body.password = sha1(req.body.password);

    req.body.otp = null;
    req.body.status = 1;
    
    User.create(req.body, (err)=>{
        res.send({ success : true });
    })
})


routes.get("/list", (req, res)=>{
    User.find({}, (err, result)=>{
        res.send(result);
    })
})


routes.get("/profile", (req, res)=>{
    // console.log(req.headers);
    var token = JSON.parse(req.headers.authorization);
    var info = jwt.decode(token, "the stepping stone");
    if(info){
        //console.log(info);
        User.find({ _id : info.id }, (err, result)=>{
            res.send(result[0]);
        })
    }else{
        res.send({ success : false });
    }
})

routes.put("/update", (req, res)=>{
    // console.log(req.headers);
    var token = JSON.parse(req.headers.authorization);
    var info = jwt.decode(token, "the stepping stone");
    if(info){
        //console.log(info);
        User.updateMany({ _id : info.id }, req.body, (err, result)=>{
            res.send({ success : true });
        })
    }else{
        res.send({ success : false });
    }
})



routes.put("/profile/:id", (req, res)=>{
    var id = req.params.id;
    User.updateMany({_id : id }, req.body, (err)=>{
        res.send({ success : true });
    })
})


module.exports = routes;