let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let fs = require('fs');

let app = express();
let router = express.Router();
let mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', function (path, opt, fn) {
     fs.readFile(path, 'utf-8', function(err, str) {
          if(err) return str;
          return fn (null, str);
     })
});

app.get('/', function(req, res, next) {
     res.render("index.html");
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
     var err = new Error('Not Found');
     err.status = 404;
     next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
     app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
               message: err.message,
               error: err
          });
     });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
          message: err.message,
          error: {}
     });
});


module.exports = app;
