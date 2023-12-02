const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserMaster = require("./db/model/user");
console.log(process.env.APP_URI);
app.use(
  cors({
    // origin: process.env.APP_URI, // Allow requests from this origin
    // methods: ["GET", "POST"], // Specify the allowed HTTP methods
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//TESTING API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//REGISTER API
app.post("/register", async (req, res) => {
  try {
    let { email, phoneno, nielitid, course, name } = req.body;
    //INCASE YOU WANT TO FIND AND PREVENT DUPLICATE REGISTRATION OF SAME MAIL
    // let find = await UserMaster.findAll({
    //   where: {
    //     EMAIL: email,
    //   },
    // });
    // let pfind = JSON.parse(JSON.stringify(find));
    let pfind = []

    if (pfind.length) {
      return res
        .status(500)
        .json({ msg: "Email ID has already been registered" });
    } else {
      let data = await UserMaster.create({
        NIELITID: nielitid,
        EMAIL: email,
        PHONENO: phoneno,
        COURSENAME: course,
        NAME: name,
      });
      return res
        .status(200)
        .json({ msg: "User Registered Succesfully", data: data });
    }
  } catch (error) {
    console.log("Error while Registering in", error);
    return res
      .status(500)
      .json({ msg: "Error occured while Registereing in", error });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
