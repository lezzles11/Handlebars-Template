const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure for HBS
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

// All static files are found in the public folder (such as css)
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => console.log("Running on 3000"));
