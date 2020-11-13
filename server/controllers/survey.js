let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');

//create reference to DB
let Survey = require('../models/survey');

module.exports.displaySurveyPage = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if (err)
        {
            return console.error(err);
        }
        else {
    
            res.render('survey/list', {title: 'Survey', SurveyList: surveyList});
            res.render('views/index', {title: 'Survey', SurveyList: surveyList});
        }
    
    });
}

module.exports.displayCreatePage = (req, res, next) =>{
    res.render('survey/create', {title: 'Create Survey'});
}

module.exports.displayProcessCreatePage = (req, res, next) =>{
    let newSurvey = Survey({
    "surveyTitle": req.body.surveyTitle,
    "question1": req.body.question1,
    "q1option1": req.body.q1option1,
    "q1option2": req.body.q1option2,
    "q1option3": req.body.q1option3,
    "q1option4": req.body.q1option4,

    "question2": req.body.question2,
    "q2option1": req.body.q2option1,
    "q2option2": req.body.q2option2,
    "q2option3": req.body.q2option3,
    "q2option4": req.body.q2option4,

    "question3": req.body.question3,
    "q3option1": req.body.q3option1,
    "q3option2": req.body.q3option2,
    "q3option3": req.body.q3option3,
    "q3option4": req.body.q3option4,

    "question4": req.body.question4,
    "q4option1": req.body.q4option1,
    "q4option2": req.body.q4option2,
    "q4option3": req.body.q4option3,
    "q4option4": req.body.q4option4,

    "question5": req.body.question5,
    "q5option1": req.body.q5option1,
    "q5option2": req.body.q5option2,
    "q5option3": req.body.q5option3,
    "q5option4": req.body.q5option4,
 
    });

    Survey.create(newSurvey, (err, Survey)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh the survey

            res.redirect('/survey');
        }
        
    });
}

module.exports.displayEditPage = (req, res, next) =>{

    let id = req.params.id;
    
    Survey.findById(id, (err, surveyToEdit) => {
    if(err){
        console.log(err)
        res.end(err);
    }
    else{
        res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit})
    }
    });
}

module.exports.displayProcessEditPage = (req, res, next) =>{

    let id = req.params.id;
    
    let updatedSurvey = Survey({
        "_id": id,
        "surveyTitle": req.body.surveyTitle,
        "question1": req.body.question1,
        "q1option1": req.body.q1option1,
        "q1option2": req.body.q1option2,
        "q1option3": req.body.q1option3,
        "q1option4": req.body.q1option4,
    
        "question2": req.body.question2,
        "q2option1": req.body.q2option1,
        "q2option2": req.body.q2option2,
        "q2option3": req.body.q2option3,
        "q2option4": req.body.q2option4,
    
        "question3": req.body.question3,
        "q3option1": req.body.q3option1,
        "q3option2": req.body.q3option2,
        "q3option3": req.body.q3option3,
        "q3option4": req.body.q3option4,
    
        "question4": req.body.question4,
        "q4option1": req.body.q4option1,
        "q4option2": req.body.q4option2,
        "q4option3": req.body.q4option3,
        "q4option4": req.body.q4option4,
    
        "question5": req.body.question5,
        "q5option1": req.body.q5option1,
        "q5option2": req.body.q5option2,
        "q5option3": req.body.q5option3,
        "q5option4": req.body.q5option4,
    });
    
    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/survey');
        }
    });
}

module.exports.ProcessDelete = (req, res, next) =>{
    let id = req.params.id;
    
    Survey.remove({_id: id}, (err) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.redirect('/survey');
    }
    });
}






