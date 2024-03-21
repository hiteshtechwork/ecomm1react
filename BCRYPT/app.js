// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
import express from "express";

const app = express();
app.use(express.json());

const users = [
  {
    username: "sam",
    password: "sam",
  },
];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 13);
  users.push({
    username,
    password: hash,
  });
  console.log(users);
  res.send("ok");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) {
    res.send("no user");
    return;
  }

  const isValid = await bcrypt.compare(password, users.password);
  if (!isValid) {
    res.send("wrong password");
    return;
  }

  // send a cookie
  // send a jwt
  res.send("ok");
});

app.listen(8081, () => {
  console.log("listening....");
});

// const password = "pass1";
// // const salt = bcrypt.genSaltSync(10);
// // const hash = await bcrypt.hash(password, salt);
// const hash = await bcrypt.hash(password, 10);
// // console.timeEnd(hash);
// // console.log(password, salt, hash);

// const isMatch = await bcrypt.compare("pass1", hash);
// console.log(isMatch);
