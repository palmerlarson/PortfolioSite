const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
// sendFile will go here
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/dist/index.html'));
// });

// app.use(express.static(__dirname + '/dist', {
//   index:false,
//   extensions: ['html']
// }));
app.use(express.static(__dirname + '/dist', {
  extensions: ['html']
}));

app.listen(port);
console.log('Server started at http://localhost:' + port);
