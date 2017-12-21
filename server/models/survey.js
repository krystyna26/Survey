var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new mongoose.Schema({
    writerName: {type: String, required: true, minlength:3},
    question:   {type: String, required: true, minlength:8},
    answer1:    {type: String, required: true, minlength:3},
    vote1:      {type: Number},
    answer2:    {type: String, required: true, minlength:3},
    vote2:      {type: Number},
    answer3:    {type: String, required: true, minlength:3},
    vote3:      {type: Number},
    answer4:    {type: String, required: true, minlength:3},
    vote4:      {type: Number},
    },{timestamps: true}
);

mongoose.model('Survey', SurveySchema);