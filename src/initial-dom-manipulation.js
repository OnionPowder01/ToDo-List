import { blankProjectLoad } from "./blank-project-load";

// DOM manipulation to display de components
export function initialdomManip () {

    //DOM for the Heading
    const contentDiv = document.querySelector('.content');
    const heading = document.createElement('h1');
    heading.textContent = 'ToDo List';
    contentDiv.appendChild(heading);

    //DOM for the default project load
    const projectsInfoDiv = document.createElement('div');
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}