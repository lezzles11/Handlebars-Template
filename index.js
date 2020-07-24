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
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    helpers: {
      getShortComment(comment) {
        if (comment.length < 64) {
          return comment;
        }

        return comment.substring(0, 61) + "...";
      },
    },
  })
);
app.set("view engine", "hbs");

// All static files are found in the public folder (such as css)
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        author: "Lesley",
        image: "https://picsum.photos/500/500",
        comments: ["why, this is a wonderful post!"],
      },
      {
        author: "Lezzles",
        image: "https://picsum.photos/500/500",
        comments: [
          "darling, this is an absolutely fantastic blog",
          "yes, dear, it's absolutely wonderful!",
        ],
      },
    ],
  });
});

app.get("/blog", function (req, res) {
  res.render("blog", {
    post: {
      author: "Lezzles",
      image: "https://picsum.photos/500/500",
      comments: [
        "darling, this is an absolutely fantastic blog",
        "yes, dear, it's absolutely wonderful!",
      ],
    },
  });
});

app.listen(3000, () => console.log("Running on 3000"));
