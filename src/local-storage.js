

export function savetoDoLocal( { title, description, dueDate, priority, checkList } ) {
    console.log ("Saving object to local storage....");
    localStorage.setItem("Title", document.getElementById("Title").value);
    localStorage.setItem("Description", document.getElementById("Description").value);
    localStorage.setItem("DueDate", document.getElementById("DueDate").value);
    localStorage.setItem("Priority", document.getElementById("Priority").value);
    localStorage.setItem("CheckList", checkList);
    
    return { title, description, dueDate, priority, checkList };
}