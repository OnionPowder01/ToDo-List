import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm, displayToDo } from "./dom-manipulation.js";
import { remove } from "lodash";
import { blankProjectLoad } from "./blank-project-load.js";
import { createToDo } from "./create-to-do.js";
import './style.css';
  
// Call blankProjectLoad on first 
blankProjectLoad();

displayToDo();


//Event Module
let clickEventsModule = (function() {

    //Displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm); 

    //Add item to the checklist of the form
    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToCheckList) ;

    //Clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm); 

    //Event to submit new todo to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);
})();




