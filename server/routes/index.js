/*  File Name: Assignment 2
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 25, 2020 */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


module.exports = router;
