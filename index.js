const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserMaster = require("./db/model/user");
console.log(process.env.APP_URI)
app.use(
  cors({
    // origin: process.env.APP_URI, // Allow requests from this origin
    // methods: ["GET", "POST"], // Specify the allowed HTTP methods
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  try {
    let { email, password, nielitid, course } = req.body;
    let find = await UserMaster.findAll({
      where: {
        EMAIL: email,
      },
    });
    let pfind = JSON.parse(JSON.stringify(find));
    if (pfind.length) {
      return res
        .status(500)
        .json({ msg: "Email ID has already been registered" });
    } else {
      let data = await UserMaster.create({
        NIELITID: nielitid,
        EMAIL: email,
        PASSWORD: password,
        COURSENAME: course
      });
      return res
        .status(200)
        .json({ msg: "User Registered Succesfully", data: data });
    }
  } catch (error) {
    console.log("Error while Registering in", error);
    return res.status(500).json({ msg: "Error occured while Registereing in" , error});
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let data = await UserMaster.findOne({
      where: {
        EMAIL: email,
        PASSWORD: password,
      },
    });
    let parsedData = JSON.parse(JSON.stringify(data));
    if (data?.EMAIL) {
      return res
        .status(200)
        .json({ msg: "User Login Succesfully", data: parsedData });
    } else {
      return res
        .status(500)
        .json({ msg: "Invalid Email/Password", data: parsedData });
    }
  } catch (error) {
    console.log("Error while logging in", error);
    return res.status(500).json({ msg: "Error occured while logging in" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
