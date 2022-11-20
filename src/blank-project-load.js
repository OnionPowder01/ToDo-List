//Factory function to create blank poject array list
export const blankProjectLoad = () => {
    let projectsArray = [];
    let projectTitle = "Default Project";

    projectsArray.push({ projectTitle });
    
    return { projectsArray, projectTitle };
    

}