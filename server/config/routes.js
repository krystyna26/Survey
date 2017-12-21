var surveys = require('./../controllers/surveys.js');
var path = require("path");

module.exports = function(app){

    // mention routes -> they go to controllers/surveys.js

    // show all surveys 
    app.get('/all', function(req,res){
        surveys.allSurveys(req,res);
    });

    // add one survey 
    app.post('/addSurvey', function(req,res){
        surveys.addSurvey(req,res);
    });
    
    // show one survey - to vote 
    app.get('/show_survey/:id',function(req,res){
        surveys.showSurvey(req,res);
    })

    // vote
    app.get('/vote/:surveyID/:answer',function(req,res){
        surveys.voteOnThisSurvey(req,res);
    })

    // delete one survey 
    app.get('/delete/:surveyID',function(req,res){
        surveys.delete(req,res);
    })

    app.all("*", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });
}