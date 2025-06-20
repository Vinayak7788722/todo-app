const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // for CSS
let items = [];

app.get("/", function (req, res) {
  res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
  const itemText = req.body.ele1.trim();
  if (itemText !== "") {
    items.push({ text: itemText, done: false });
  }
  res.redirect("/");
});

app.post("/toggle", function (req, res) {
  const index = req.body.index;
  items[index].done = !items[index].done;
  res.redirect("/");
});

app.listen(8000, function () {
  console.log("Server started on port 8000");
});
