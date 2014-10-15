/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/staffcategory/staffcategory.server.rqh.js');

module.exports = function(app){
    app.route('/staffcategory')
        .get(rqh.getStaffCategories)
        .post(rqh.createStaffCategory);

    app.route('/staffcategory/staffcategory_id')
        .get(rqh.getStaffCategory)
        .put(rqh.updateStaffCategory)
        .delete(rqh.removeStaffCategory);

};