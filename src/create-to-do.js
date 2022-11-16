import { compareAsc, format, parseISO, startOfToday } from 'date-fns'
import { clearForm } from './dom-manipulation.js';


//Creating an array for ToDo if needed
let toDoArray = [];

//Factory function to create ToDo list
export const createToDo = () => {

    let title = document.getElementById("Title").value;
    let description = document.getElementById("Description").value;
    let dueDate = document.getElementById("DueDate").value;
    let priority = document.getElementById("Priority").value;

    //Check to see if empty fields
    if (title == "" || description == " " || dueDate == "") {
        alert("Title, Descritpion and Due Date are required fields, please try again!")
        return
    }

    //Check to see if pre-date entered
    if (parseISO(dueDate) < startOfToday()) {
        alert("You have entered a date that has already passed! Please enter a date greater than or equal to today. ");
        console.log("due date", parseIso(dueDate));
        console.log('date now', startOfToday());
        return
    }
    //Loop over the nodelist for check list items from the DOM
    const nodeListCheckList = document.querySelectorAll('li');
    let checkListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++) {
        
        //push the "x" to temp array
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        checkListArray.push(strippedCheckList);
    };

    let checklist = checkListArray.join(", ");

    console.log('Called createToDo module.. creating todo now');
    console.log({ title, description, dueDate, priority, checklist });
    console.log("Pushing this object to the toDoArray");
    
    
    toDoArray.push({ title, description, dueDate, priority, checklist });
    console.log(toDoArray);

    //Reset the form after succesful submission
    clearForm();

    return { title, description, dueDate, priority, checklist };
    
    
}