const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

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
                res.send({ success : true, token : token });
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