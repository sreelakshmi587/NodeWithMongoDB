const { error } = require("console");
const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user");
const Role = require("./models/role");
const { result } = require("lodash");
const userRouter = require('./router/userRouter');
const roleRouter = require('./router/roleRouter');


const app = express();

const dbURI =
  "mongodb+srv://sreelakshmi:sreelakshmi%409668@nodelearning.bqlaqi5.mongodb.net/user?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(8088))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "Views");

app.use(express.json());

app.get("/add", (req, res) => {
  const users = [
    {
      name: "Sree",
      age: 24,
      address: "TVM",
    },
    {
      name: "SsS",
      age: 24,
      address: "TVM",
    },
  ];
  User.insertMany(users)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});


app.use(roleRouter);
app.use(userRouter);


// app.listen(8088);

// app.use((req,res,next)=>{
//     console.log('First middleware');
//     next();
// })
app.get("/", (req, res) => {
  // console.log(req.url);
  // res.send('Helloo');
  res.render("index", { title: "Index" });
});

app.get("/about", (req, res) => {
  // res.sendFile('./Views/about.html',{root:__dirname});
  res.render("about", { title: "About" });
});

app.get("/index", (req, res) => {
  // res.sendFile('./Views/index.html',{root:__dirname});
  res.render("index", { title: "Index" });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("error");
});
