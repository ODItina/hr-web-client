/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */

'use strict';
var hrCore = require('hr-core');

//Create
exports.createJobRole = function(req, res){
    var data = req.body;
    hrCore.write.createJobRole(data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Read
exports.getJobRole = function(req, res){
    var Id = req.params.Id;
    hrCore.read.getJobRole({_id:Id},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

exports.getJobRoles = function(req, res){
    hrCore.read.getJobRoles(
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};


//Update
exports.updateJobRole = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    hrCore.write.updateJobRole({_id:Id},data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
            else{
                res.json({
                    message:'update operation not successful'
                });
            }
        });
};

//Delete
exports.removeJobRole = function(req, res){
    var Id = req.params.Id;
    hrCore.write.removeJobRole({_id:Id},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Create Sub Docs
exports.createSpecialtyByJobRole = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    hrCore.write.createSpecialty({jobrole:{_id:Id}},data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Read Sub doc
exports.getSpecialtiesByJobRole = function(req, res){
    var Id = req.params.Id;
    hrCore.read.getJobRole({_id:Id}, 'specialities',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub doc
exports.updateSpecialtyByJobRole = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var specialityId = req.params.speciality.Id;
    hrCore.write.updateSpecialty({jobrole:{_id:Id}, _id:specialityId},data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Delete Sub docs
exports.removeSpecialtyByJobRole = function(req, res){
    var Id = req.params.Id;
    var specialityId = req.params.speciality.Id;
    hrCore.write.removeSpecialty({jobrole:{_id:Id}, _id:specialityId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};