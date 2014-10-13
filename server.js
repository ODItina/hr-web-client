'use strict';
/**
 * Created by Dominic on 16-Sep-2014.
 */
var mongoose = require('mongoose'),
    swig = require('swig'),
    path = require('path');


var express = require('express');

var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/server/views');
mongoose.connect('mongodb://localhost/databank');


var port = process.env.NODE_ENV || 3040;

app.use(express.static(path.resolve('./public')));

require('./server/config/express')(app);
//require('./server/config/passport')();



app.listen(port);
console.log('Application Started on port '+ port);