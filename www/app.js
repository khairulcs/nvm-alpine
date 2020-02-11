var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('CRSM');
});
app.listen(3000, function () {
  console.log('CRSM app listening on port 3000!');
});
