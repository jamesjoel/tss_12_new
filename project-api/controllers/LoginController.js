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
                res.send({ success : true, otp : rand_num });
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
                if(result[0].status==1){

                    // console.log(result[0]);
                    var obj = { email : result[0].email, id : result[0]._id };
                    var token = jwt.sign(obj, "the stepping stone");
                    // console.log(token);
                    // return;
                    res.send({ success : true, token : token, name : result[0].name });
                }else{
                    res.send({ success : false, type : 3});
                }
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


routes.post("/updatepassword", (req, res)=>{
    console.log(req.body);
    var obj = { password : sha1(req.body.password), otp : null };

    User.updateMany({ email : req.body.email }, obj, (err)=>{
        res.send({ success : true });
    })
})

module.exports = routes;