/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/jobrole/jobrole.server.rqh.js');

module.exports = function(app){
    app.route('/jobrole')
        .get(rqh.getJobRoles)
        .post(rqh.createJobRole);

    app.route('/jobrole/jobrole_id')
        .get(rqh.getJobRole)
        .put(rqh.updateJobRole)
        .delete(rqh.removeJobRole);

    app.route('/jobrole/:jobrole_id/specialities/:speciality_id')
        .get(rqh.getSpecialtiesByJobRole)
        .post(rqh.createSpecialtyByJobRole)
        .put(rqh.updateSpecialtyByJobRole)
        .delete(rqh.removeSpecialtyByJobRole);

};