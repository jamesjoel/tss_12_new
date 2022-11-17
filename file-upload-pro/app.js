const express = require("express");
const app = express();
const upload = require("express-fileupload");

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



app.listen(3000, ()=>{
    console.log("running");
})