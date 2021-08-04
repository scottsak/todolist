const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
  var today= new Date();

  if(today.getDay() === 6 || today.getDay() === 0){
    res.write("<h1>Yay it's the weekend!</h1>");
  }
  else{
    res.write("<p>It is the work day.</p>");
    res.write("<h1>Boo! I have to work today</h1>");
    res.send(__dirname + "/index.html");
  }
});

app.listen(3000, function(){
  console.log("running on port 3000");
});
