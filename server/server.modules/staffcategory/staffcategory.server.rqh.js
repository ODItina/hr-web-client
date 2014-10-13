/**
 * Created by KP_TerminalUser2 on 13/10/2014.
 */

'use strict';
var hrCore = require('hr-core');

//Create
exports.createStaffCategory = function(req, res){
    var data = req.body;
    hrCore.write.createStaffCategory(data,
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
exports.getStaffCategory = function(req, res){
    var Id = req.params.Id;
    hrCore.read.getStaffCategory({_id:Id},
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

exports.getStaffCategories = function(req, res){
    hrCore.read.getStaffCategories(
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
exports.updateStaffCategory = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    hrCore.write.updateStaffCategory({_id:Id}, data,
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
exports.removeStaffCategory = function(req, res){
    var Id = req.params.Id;
    hrCore.write.removeStaffCategory({_id:Id},
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