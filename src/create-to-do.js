import { compareAsc, format, parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manipulation.js";
import { saveToDoLocal } from "./local-storage.js";

//Creating an array for ToDo if needed
let toDoArray = [];

//Factory function to create ToDo list
export const createToDo = () => {
  let Title = document.getElementById("Title").value;
  let Description = document.getElementById("Description").value;
  let DueDate = document.getElementById("DueDate").value;
  let Priority = document.getElementById("Priority").value;

  //Check to see if empty fields
  if (Title == "" || Description == " " || DueDate == "") {
    alert(
      "Title, Descritpion and Due Date are required fields, please try again!"
    );
    return;
  }

  //Check to see if pre-date entered
  if (parseISO(DueDate) < startOfToday()) {
    alert(
      "You have entered a date that has already passed! Please enter a date greater than or equal to today. "
    );
    return;
  }
  //Loop over the nodelist for check list items from the DOM
  const nodeListCheckList = document.querySelectorAll(".form-li");
  let _checkListArray = [];
  for (let i = 0; i < nodeListCheckList.length; i++) {

    //push the "x" to temp array
    let strippedCheckList = nodeListCheckList[i].textContent.replace(
      "\u00D7",
      ""
    );
    _checkListArray.push(strippedCheckList);
  }

  console.log(`hi there JSON ` + JSON.stringify(nodeListCheckList));

  let Checklist = _checkListArray.join(", ");
  console.log(`here is the ${Checklist}`);

  toDoArray.push({ Title, Description, DueDate, Priority, Checklist });

  saveToDoLocal({ Title, Description, DueDate, Priority }, Checklist);
  
  //Reset the form after succesful submission
  clearForm();

  //Storage module for pushing to local storage
  return { Title, Description, DueDate, Priority}, Checklist;
  
};
