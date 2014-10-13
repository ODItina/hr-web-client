'use strict';
/**
 * Created by Dominic on 18-Sep-2014.
 */

var settings  = require('./settings');
var collator  = require('./collator'),
//var passport = require('passport'),
    path = require('path');

module.exports = function(app){
    // Setting application local variables
    app.locals.title = settings.app.title;
    app.locals.description = settings.app.description;
    app.locals.keywords = settings.app.keywords;
    app.locals.jsFiles = collator.getJavaScriptAssets();
    app.locals.cssFiles = collator.getCSSAssets();


    // use passport session
//    app.use(passport.initialize());
//    app.use(passport.session());


    collator.getGlobbedFiles('./server/routes/**/*.js').forEach(function(routePath) {
        require(path.resolve(routePath))(app);
    });
};