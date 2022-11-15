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
    
    
}