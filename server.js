var express = require('express');
var app = express();
var ejs = require('ejs');
var engine = require('ejs-mate');


app.use(express.static(__dirname + '/public'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');



app.get('/', function (req, res, next) {
    res.render('index');
});
app.get('/category', function (req, res, next) {
    res.render('category');
});
app.get('/categories', function (req, res, next) {
    res.render('categories');
});
app.get('/login', function (req, res, next) {
    res.render('login');
});
app.get('/page', function (req, res, next) {
    res.render('page');
});
app.get('/pages', function (req, res, next) {
    res.render('pages');
});
app.get('/user', function (req, res, next) {
    res.render('user');
});
app.get('/users', function (req, res, next) {
    res.render('users');
});



app.listen(process.env.PORT, function (err) {
    if(err) throw err;
    console.log('Server has started');
});