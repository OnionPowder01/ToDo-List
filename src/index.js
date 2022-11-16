import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from "./dom-manipulation";
import { remove } from "lodash";
import { blankProjectLoad } from "./blank-project-load";
import { createToDo } from "./create-to-do";
import './style.css';
  
// Call blankProjectLoad on first 
blankProjectLoad();



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




