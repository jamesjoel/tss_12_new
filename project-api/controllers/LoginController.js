const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");
const rand = require("random-numbers");

routes.post("/forgotpassword", (req, res)=>{
    var e = req.body.email;
    User.find({ email : e }, (err, result)=>{
        if(result.length > 0)
        {
            var rand_num = rand.create(1000, 9999);
            User.updateMany({ email : e }, { otp : rand_num }, (err)=>{
                res.send({ success : true });
            })   
        }
        else{
            res.send({ success : false });
        }
    })
})


routes.post("/", (req, res)=>{
    // console.log(req.body);
    var e = req.body.email; // hello@gmail.com
    var p = req.body.password;

    User.find({ email : e }, (err, result)=>{

        if(result.length > 0) // if email id is correct or exitsts in db
        {
            if(result[0].password == sha1(p))
            {
                // console.log(result[0]);
                var obj = { email : result[0].email, id : result[0]._id };
                var token = jwt.sign(obj, "the stepping stone");
                // console.log(token);
                // return;
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