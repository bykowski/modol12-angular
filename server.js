const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/modol12-angular'));

app.post('/*', function(req, res){
  res.sendFile(__dirname +  '/dist/modol12-angular/index.html');
});
app.listen(4200);

