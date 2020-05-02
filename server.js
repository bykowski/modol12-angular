const express = require('express');

const app = express();

app.use(express.static('./dist/modol12-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/modol12-angular/'}),
);

app.listen(process.env.PORT || 8080);
