const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const _ = require("lodash");
require("dotenv").config();
const Hero = require("./server_folder/db_schema");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const router = express.Router();

const dbUrl = process.env.MONGO_URL;

// connects our back end code with the database
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(logger("dev"));
app.use("/api/v1", router);
// this is our get method
// this method fetches all available data in our database
router.get("/heroes/:heroId", (req, res) => {
  Hero.find({ id: req.params.heroId }, function(err, heroes) {
    if (err) {
      res.send(err);
    }

    res.json(heroes[0]);
  });

  //return res.json({ hero: hero });
});

router.get("/heroes", (req, res) => {
  let page = 1,
    q = "",
    paramsString = JSON.stringify(req.query),
    params = JSON.parse(paramsString);

  if (params["page"]) {
    page = params["page"];
  }

  if (params["q"] && params["q"].replace(/^"(.*)"$/, "$1") !== "") {
    //const str = ".*" + params["q"].replace(/^"(.*)"$/, "$1") + "*.";
    const str = params["q"].replace(/['"]+/g, "");

    q = new RegExp(str, "i");
  }
  console.log(q);
  Hero.paginate({ name: { $regex: q } }, { page: page, limit: 8 }, function(
    err,
    result
  ) {
    if (err) return res.json({ success: false, error: err });
    return res.json({
      heroes: result.docs,
      currentPage: parseInt(result.page),
      totalPages: parseInt(result.totalPages)
    });
  });
});

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// this is our update method
// this method overwrites existing data in our database

// append /api for our http requests

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
