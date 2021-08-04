const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today= new Date();
  var currentDay = today.getDay();
  var day = "";

  var dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  for (var i = 0; i < 7; i++) {
    if(currentDay === i){
      day = dates[i];
      break;
    }
  }

  res.render("list", {kindOfDay: day})
});

app.listen(3000, function(){
  console.log("running on port 3000");
});
