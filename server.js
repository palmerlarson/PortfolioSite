const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

//Prod
// app.use(express.static('dist'));

//Dev
app.use(express.static('--no-source-maps'));

//index page
app.get('/', function(req, res) {
  res.render('pages/index', {
    title: "home"
  });
});

//resume page
app.get('/resume', function(req, res) {
  res.render('pages/resume', {
    title: "resume"
  });
});

//blog
app.get('/blog', function(req, res) {
  res.render('pages/blog', {
    title: "blog"
  });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
