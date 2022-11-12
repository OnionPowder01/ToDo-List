//Creating an array for ToDo if needed
let toDoArray = [];

//Factory function to create ToDo list
export const createToDo = (Title, Description, DueDate, Priority, Checklist) => {
    console.log({ Title, Description, DueDate, Priority, Checklist });
    toDoArray.push({ Title, Description, DueDate, Priority, Checklist });
    console.log(toDoArray);

    return { Title, Description, DueDate, Priority, Checklist };
}