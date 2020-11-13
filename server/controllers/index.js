const e = require("express");
let express = require("express");
let router = express.Router();




module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', {title: 'Home'});

}

module.exports.displaySurveyPage = (req, res, next) =>{
    res.render('survey/list', { title: 'Survey'});

}
