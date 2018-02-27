var express = require("express");
var app = express();

app.post("/insertUser", (req, res)=> {
    res.json('Yo whats up dude it is me Express');
});

app.get("/testing", (req,res)=>{
    res.sendfile('testing.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});
