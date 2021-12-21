const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/pug", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
