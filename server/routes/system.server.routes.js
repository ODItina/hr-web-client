/**
 * Created by Dominic on 02-Oct-2014.
 */
'use strict';
var rqh = require('../requesthandlers/system');

module.exports = function(app){
    app.route('/')
        .get(rqh.initialize);
};