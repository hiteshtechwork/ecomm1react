const expres = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = expres();
app.use(expres.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST,GET"],
    credentials: true,
  })
);

// mysql connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecomm1react",
});

// post api to register
app.post("/register", async (req, res) => {
  const sql = "INSERT INTO users ( `name` , `email`,`password`) VALUES  (?)";
  const hash = await bcrypt.hash(req.body.password, 10);
  const values = [req.body.name, req.body.email, hash];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

////////////////////////////////////////////////////
//  // post api to login

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users where email=?";

  db.query(sql, [req.body.email], async (err, data) => {
    if (err) return res.json({ Message: "SERVER SIDE error in Login api" });
    if (data.length === 0) {
      return res.json({
        Status: "emailNotFound",
        Message: "Email didn't matched",
      });
    } else {
      const name = data[0].name;
      // console.log(name);
      const isValid = await bcrypt.compare(req.body.password, data[0].password);
      // console.log(isValid);

      if (isValid) {
        const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
          expiresIn: "1d",
        });
        // console.log(token);
        res.cookie("token", token);

        return res.json({ Status: "loginSuccess" });
      } else {
        return res.json({
          Status: "wrongPassword",
          Message: "Wrong Password",
        });
      }
    }
  });
});

// home page when logged in

// protected route
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Message: "We need token please provide it . Login Now" });
  } else {
    jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({
          Message: "Authentication error",
        });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  // const token = req.cookies.token;

  return res.json({ Status: "Success", name: req.name });
});

// logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// checkout
app.get("/checkout", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

app.listen(5000, () => {
  console.log("listening to backend...");
});
