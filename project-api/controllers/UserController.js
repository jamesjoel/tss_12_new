const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

routes.post("/signup", (req, res)=>{
    
    delete req.body.re_password;

    req.body.password = sha1(req.body.password);
    
    User.create(req.body, (err)=>{
        res.send({ success : true });
    })
})


module.exports = routes;