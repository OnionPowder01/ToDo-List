import { initialdomManip } from "./Initial-dom-manipulation";
import { blankProjectLoad } from "./blank-project-load";
import { createToDo } from "./create-to-do";
  
// Call blankProjectLoad on first 
blankProjectLoad();

//Call DOM Manipulation module for UI
initialdomManip();

//TODO: Click event module here for todo and project creations

//create-to-do.js module file and apply some objects properties
let myToDo = createToDo("Grocery Run", "Go get groceries", "15/11/2022", "Low", "Meat, Eggs, Milk");

console.log('console log properties on myToDo from index.js....', myToDo);

