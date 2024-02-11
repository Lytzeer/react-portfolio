import React from "react";
import Project from "./Projects/Projects";
import Stack from "./Stack/Stack";

const Projects = () => {
    return(
    <div className='text-5xl font-gotham-bold flex flex-col items-center'>
        <Project />
        <Stack />
    </div>
    )
};

export default Projects;