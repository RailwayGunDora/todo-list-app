//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser'); // to take info from html
const date = require(__dirname + "/date.js");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var items = [];
var workItems = [];

const port = 3000;


app.get("/", function(req, res) {
  let day = date.getDay(); // calling const with module export extention function
  res.render('list', {
    listTitle: day,
    newitems: items
  }); /// pass the variable to html via EJS template
  //  ^  the variable ^ should match the one in the markers can be multiple variables

});
// get value from html
app.post("/", function(req, res) {

  let item = req.body.newitem;
  if (req.body.list === "work") {
    let item = req.body.newitem;
    workItems.push(item);
    res.redirect("/work"); // this takes values we got from HTML so that EJS can render them in the home route
  } else {
    items.push(item);
    res.redirect("/"); // this takes values we got from HTML so that EJS can render them in the home route
    // Vari' Scope Global
  }
})
// a new route
app.get("/work", function(req, res) {
  res.render('list', {
    listTitle: "work list",
    newitems: workItems
  }) // render magic re-usable template
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(port, function() {
  console.log("Server is Live on port " + port);
});
