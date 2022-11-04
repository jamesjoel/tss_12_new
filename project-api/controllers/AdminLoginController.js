const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.get("/save", ()=>{
    Admin.create({name : "Rohit", username : "rohit", password : "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8"},(err)=>{
        console.log("saved");
    })
})

routes.post("/login", (req, res)=>{
    // console.log(req.body);
    var u = req.body.username; // hello@gmail.com
    var p = req.body.password;

    Admin.find({ username : u }, (err, result)=>{

        if(result.length > 0) // if email id is correct or exitsts in db
        {
            if(result[0].password == sha1(p))
            {
                var obj = { username : result[0].username, id : result[0]._id };
                var token = jwt.sign(obj, "the stepping stone");
                res.send({ success : true, token : token, name : result[0].name });
            }
            else{

                res.send({ success : false, type : 2 });
            }
        }
        else{ // email id is not exists in DB
            res.send({ success : false, type : 1 });
        }
    })

})

module.exports = routes;