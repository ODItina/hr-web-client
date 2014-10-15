/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */

'use strict';
var hrCore = require('hr-core');

//Create
exports.createDepartment = function(req, res){
    var data = req.body;
    hrCore.write.createDepartment(data,
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
exports.getDepartment = function(req, res){
    var Id = req.params.Id;
    hrCore.read.getDepartment({_id:Id},
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

exports.getDepartments = function(req, res){
    hrCore.read.getDepartments(
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
exports.updateDepartment = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    hrCore.write.updateDepartment({_id:Id}, data,
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
exports.removeDepartment = function(req, res){
    var Id = req.params.Id;
    hrCore.write.removeDepartment({_id:Id},
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
exports.createUnitByDepartment = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    hrCore.write.createUnit({department:{_id:Id}},data,
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
exports.getUnitsByDepartment = function(req, res){
    var Id = req.params.Id;
    hrCore.read.getDepartment({_id:Id}, 'unit',
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
exports.updateUnitByDepartment = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var unitId = req.params.unit.Id;
    hrCore.write.updateUnit({department:{_id:Id}, _id:unitId},data,
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
exports.removeUnitByDepartment = function(req, res){
    var Id = req.params.Id;
    var unitId = req.params.unit.Id;
    hrCore.write.removeUnit({department:{_id:Id}, _id:unitId},
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