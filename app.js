const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today= new Date();
  var currentDay = today.getDay();
  var day = "";

  var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = dates[currentDay];

  res.render("list", {kindOfDay: day})
});

app.listen(3000, function(){
  console.log("running on port 3000");
});
