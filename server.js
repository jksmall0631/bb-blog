require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const aws = require("aws-sdk");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH ,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('*/main.bundle.js', function (req, res, next) {
  console.log("bla");
  console.log(req.url);
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3000);

app.post("/api/v1/auth", (req, res) => {
  const { username, password } = req.body;

  database("user")
    .where("username", username)
    .select()
    .then(user => {
      if (password != user[0].password) {
        res.status(404).json({ message: "Incorrect password." });
      }
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(404).json({ message: "Email Not Found." });
    });
});

let s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-west-2"
});
let multer = require("multer");
let multerS3 = require("multer-s3");
let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "buddha-babies",
    region: "us-west-2",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

app.post("/api/v1/photo", upload.single("file"), (req, res) => {
  res.send(JSON.stringify({ url: req.file.location }));
});

app.post("/api/v1/events", (req, res) => {
  const { photo, title, date, desc, type, expire } = req.body;
  const post = { photo, title, date, desc, type, expire };
  database("events")
    .insert(post)
    .returning("*")
    .then(data => res.send(data))
    .catch(err => res.status(404).json(err));
});

app.delete("/api/v1/events", (req, res) => {
  const { id } = req.body;
  database("events").where("id", id).select().del().then(count => {
    if (count === 0) {
      res.status(422).json({ "Response 422": "Unprocessable Entity" });
    } else {
      res.status(200).json({ "Response 200": "OK" });
    }
  });
});

app.get("/api/v1/events", (req, res) => {
  database("events")
    .select()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(404).json(error));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});


app.listen(app.get("port"), () => {
  console.log(`Running on ${app.get("port")}`);
});
