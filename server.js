const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("dist"));
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.post('/docs/palmerLarson2022', function(req, res, next) {
  var stream = fs.readStream('/dist/docs/palmerLarson2022.pdf');
  var filename = "palmerLarson2022.pdf"; 
  // Be careful of special characters

  filename = encodeURIComponent(filename);
  // Ideally this should strip them

  res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');

  stream.pipe(res);
});



app.listen(port);
console.log('Server started at http://localhost:' + port);
