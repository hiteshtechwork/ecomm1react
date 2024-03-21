const expres = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");

const app = expres();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(expres.json());

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

// post api to login
// login api 1.
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? ";

  db.query(sql, [req.body.email], async (err, data) => {
    if (err) return res.json({ Message: "SERVER SIDE error in login api" });
    if (data.length > 0) {
      const name = data[0].name;
      console.log(name);

      const isValid = await bcrypt.compare(req.body.password, data[0].password);
      console.log(isValid);

      if (isValid) {
        return res.json({ Status: "Success" });
      } else {
        return res.json({
          Status: "status failed",
          Message: "wrong pass",
        });
      }

      // const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", {
      //   expiresIn: "1d",
      // });
      // res.cookie("token", token);
    } else {
      return res.json({ Message: "No record exists" });
    }
  });
});

app.listen(5000, () => {
  console.log("listening to backend...");
});
