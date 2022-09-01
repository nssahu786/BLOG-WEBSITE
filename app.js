const express = require("express");
const connectdb = require("./database/connectdb.js");
const cookieParser = require('cookie-parser')
const app = express(); // FUNCTION CREATE
app.use(cookieParser())
const port = process.env.PORT || 3000;

var session = require("express-session"); //message
var flash = require("connect-flash");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(flash());
const web = require("./routes/web.js"); // ROUTER LINK

var bodyParser = require("body-parser"); // BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", web); // LOAD ROUTER

app.set("view engine", "ejs"); // SET EJS TEMPLATE ENGINE

// app.get('/', (req,res) => {     // ROUTE CREATE
//     res.send('HOME PAGE')
// })
// STATIC FILES FOR CSS IMAGE & IMAGE
app.use(express.static("public"));

connectdb(); // database connection

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});