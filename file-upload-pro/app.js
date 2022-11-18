const express = require("express");
const app = express();
const upload = require("express-fileupload");
// const buffer = require("buffer");
// const buf = new buffer();
const https = require("https");
const request = require("request");
const fs = require("fs");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(upload());

app.post("/save", (req, res)=>{
    //console.log(req.files.photo);
    let name = req.files.photo.name;
    let photo = req.files.photo;
    photo.mv(__dirname+"/assets/user-images/"+name, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        //console.log("uploaded");
        res.redirect("/");
    });
})

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/demo", (req, res)=>{
   let filename = path.resolve()+'/print2.pdf';
   let stream =  request("https://u29472986.ct.sendgrid.net/ls/click?upn=HZ3rmNltPLsyZo7n3kP61SdlDyqr2tv5EzMJ1JMmHtz7-2FBVf6pqjucoghtoI51l4lwyg-2BMsjkRdV8g2LZqAGkC6JlYpHX7pgxSz1yM1SO237ihhP839DiKHLkt8IC3MlLZWwD1iKrDQbkSB2m4MTszSM860EYby5eFGgd-2FNnC-2Br3P6FnpvEk-2FeLlWUvIu944InIOnWzVJT9R2k553j0kaA8frqLt4y0xLFI9YQUT-2F-2BA-3Ddh3F_-2BGZH6mSoyIIHtqep8qDL-2FVF-2FVKmRWX1SCYMWAr5MyO26wsFTcYGW-2FgwRHGflg0pcxwwDR3MiUZ4hM59IhkX3XvTyXe59Bfe-2FXmQoWrITOjF5Z-2FewGOwaYHfvNd82G7onakBSf95hn-2FIcxMsAX-2FemaDftRpMb7GkuAbaRChqU8pimEajwxWJPEqTGdsZVx57vV66gdCXSEjSWXa7o-2Bwxyah8sTPP56u-2B-2FiF-2ByPzwfrhY-3D").pipe(fs.createWriteStream(filename));
   
   stream.on("finish", (err)=>{
    // console.log("done", filename);
    // res.redirect("/");
    res.send(`<a download href=${filename}>Download</a>`);
   })

})



app.listen(3000, ()=>{
    console.log("running");
})