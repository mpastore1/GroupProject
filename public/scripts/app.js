/*  File Name: Assignment 2
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 25, 2020 */

//const { event } = require("jquery");

//IIFE -- Immeadiately Invoked Function Expression

(function() {
   function Start()
   {
       console.log("App Started...");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for(button of deleteButtons){
           button.addEventListener('click', (event) =>{
               if(!confirm('Are You Sure?'))
               {
                   event.preventDefault();
                   window.location.assign('/survey');
               }
           });
       }

   }

   window.addEventListener("load", Start);

})();
