const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let surveyController = require('../controllers/survey');


/* Get Route for our Survey Page */

router.get('/', surveyController.displaySurveyPage);

//Get Route For Create Survey Page

router.get('/create',  surveyController.displayCreatePage);

//Post Route for processing
router.post('/create', surveyController.displayProcessCreatePage);

// Get Route for Edit Page - Update Operations

router.get('/edit/:id', surveyController.displayEditPage);


//Post Route for processing - Update

router.post('/edit/:id', surveyController.displayProcessEditPage);

//Get route for performing deletion

router.get('/delete/:id', surveyController.ProcessDelete);

module.exports = router;