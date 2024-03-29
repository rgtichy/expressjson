// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
var dojoers=[];
app.get('/', function(req, res) {
  // console.log(dojoers)
 res.render("index", {dojoers: dojoers});
})
// post route for adding a user
app.post('/results', function(req, res) {
 // console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 dojoers.push({body: req.body});

 res.redirect('/');
})
app.post('/results2', function(req, res) {
  console.log("/results2")
 // console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 // dojoers.push({body: req.body});
 console.log(JSON.stringify(req.body))
  // res.write(JSON.stringify(req.body));
  res.send(JSON.stringify(req.body));
 // res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
