const express = require('express');
const path = require('path');

const app = express();
app.use(express.static("dist"));
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.post('/docs/palmerLarson2022.pdf', function(req, res, next) {
  let file=fs.createReadStream('/dist/docs/palmerlarson2022.pdf');
  var stat = fs.statSync('/dist/docs/palmerlarson2022.pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=palmerLarson2022.pdf');
  file.pipe(res);

  stream.pipe(res);
});



app.listen(port);
console.log('Server started at http://localhost:' + port);
