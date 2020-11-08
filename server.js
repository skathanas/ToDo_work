const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mainPage = require("./routes/main");
const getError = require("./routes/404");
const getAbout = require("./routes/about")
const getWork = require("./routes/work");
const date = require(__dirname+ "/generateDate.js"); //_dirname sest nad ei ole moodulite all

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); //annab loa kasutada kausta frontendile

app.use(getWork);
app.use(mainPage);
app.use(getAbout);
//routing error lehele, kui on mingi jama sisend

app.use(getError);


app.listen (3000, ()=> {
    console.log("Server is running on port 3000");
})