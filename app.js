const express = require("express");
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoController");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("./public"));

// controllers
todoController(app);

app.listen(3000, () => {
  console.log("listening on 127.0.0.1:3000");
});
