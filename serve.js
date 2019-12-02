const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/webpack", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "webpack.html"));
});

console.log(">>>");

app.listen(9000);
