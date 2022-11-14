import { displayDefaultProject, displayTheForm, addItemToCheckList, clearForm } from "./dom-manipulation";
import { blankProjectLoad } from "./blank-project-load";
import { createToDo } from "./create-to-do";
  
// Call blankProjectLoad on first 
blankProjectLoad();



//Event Module
let clickEventsModule = (function() {

    //Displaying the form
    const addNewToDo = document.querySelector(".add-todo-button")
    addNewToDo.addEventListener("click", displayTheForm()) 

    //Add item to the checklist of the form
    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToCheckList()) ;

    //Clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm()); 
})();


//create-to-do.js module file and apply some objects properties
let myToDo = createToDo("Grocery Run", "Go get groceries", "15/11/2022", "Low", "Meat, Eggs, Milk");

console.log('console log properties on myToDo from index.js....', myToDo);

