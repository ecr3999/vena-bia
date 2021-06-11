const express = require('express');
const host = '0.0.0.0';
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/ , function(req,res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port, host, function() {
    console.log("Server started..."); 
});
