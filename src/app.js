const express = require("express");
const path = require("path");
const bodyparser = require('body-parser');
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;


const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);



app.get("/",(req,res)=>{
    res.render("index");
})



app.post("/contact",(req,  res) => {
    const userData = new User();
        userData.name=req.body.usr;
        userData.email=req.body.exampleInputEmail1;
        userData.message=req.body.usr1;
        userData.save();
        //console.log(req.body.usr);
        res.redirect("/");
})


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})