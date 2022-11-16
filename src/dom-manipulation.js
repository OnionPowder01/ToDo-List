import { remove } from "lodash";
import { blankProjectLoad } from "./blank-project-load";

// DOM manipulation to display the components
export function displayDefaultProject () {

    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display= "";
}

export function addItemToCheckList() {
    const addItem = document.getElementById("add-to-checklist").value;
  
    /* _________ Check if input inbox is empty and button was clicked __________ */
    //If not empty, apply contents to new li in DOM
    
    if (addItem !== "") {
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";
        
        //DOM check for existing check list items already present
        if(document.querySelectorAll(".form-li").length > 0) {
            console.log("Inside module if...", document.querySelectorAll(".form-li").length);
            const nodeListCheckList = document.querySelector(".form-li");
            console.log(nodeListCheckList);

            //DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromCheckList() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove(); 
    }
    document.getElementById("add-todo").reset();
}
