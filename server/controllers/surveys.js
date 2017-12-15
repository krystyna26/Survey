var mongoose = require('mongoose');
var Survey = mongoose.model("Survey");

module.exports = {
    // implement logic from routes.js
    
    // show all surveys 
    allSurveys: function(req,res){
        Survey.find({}, function(err, surveys){
            console.log("allSurveys() from surveys.js")
            console.log("surveys:", surveys);
            res.json(surveys);
        })
    },
    
    // add one survey
    addSurvey: function(req,res){
        var new_survey = new Survey({
            writerName: req.body.writerName,
            question : req.body.question,
            answer1: req.body.answer1,
            vote_1 : 0,
            answer2: req.body.answer2,
            vote_2 : 0,
            answer3: req.body.answer3,
            vote_3 : 0,
            answer4: req.body.answer4,
            vote_4 : 0
        });

        new_survey.save(function(err){
            if(err){
                console.log("something went wrong...");
            }else{
                console.log('added survey to db in addSurvey() surveys.js');
            } 
        })
    },

    // show one survey - to vote 
    showSurvey: function(req,res){
        Survey.findOne({_id : req.params.id},function(err,survey){
            res.json(survey);
        })
    }, 
     
    // vote
    voteOnThisSurvey: function(req,res){
        Survey.findById(req.params.surveyID, function(err,survey){
            if(req.params.answer == survey.answer1){
                survey.vote_1 = survey.vote_1 + 1;
            }else if(req.params.answer == survey.answer2){
                survey.vote_2 = survey.vote_2 + 1;
            }else if(req.params.answer == survey.answer3){
                survey.vote_3 = survey.vote_3 + 1;
            }else if(req.params.answer == survey.answer4){
                survey.vote_4 = survey.vote_4 + 1;
            }

            Survey.save(function(err){
                if(err){
                    console.log("something went wrong...");
                }else{
                    console.log('added vote to db in voteOnThisSurvey() in surveys.js ');
                }
            })
        })
    },

    // delete one survey
    delete: function(req,res){
        Survey.findOneAndRemove({_id : req.params.surveyID},function(err){
            if(err){
                console.log("something went wrong in delete() surveys.js");
            }else{
                console.log('Survey deleted');
            }
        })
    }



}