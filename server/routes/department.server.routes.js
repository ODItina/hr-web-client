/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/department/department.server.rqh.js');

module.exports = function(app){
    app.route('/department')
        .get(rqh.getDepartments)
        .post(rqh.createDepartment);

    app.route('/department/department_id')
        .get(rqh.getDepartment)
        .put(rqh.updateDepartment)
        .delete(rqh.removeDepartment);

    app.route('/department/:department_id/unit/:unit_id')
        .get(rqh.getUnitsByDepartment)
        .post(rqh.createUnitByDepartment)
        .put(rqh.updateUnitByDepartment)
        .delete(rqh.removeUnitByDepartment);

};