import React from "react";
import Project from "./Projects";
import Stack from "./Stack";

const Projects = () => {
    return(
    <div className='text-5xl font-gotham-bold flex flex-col items-center'>
        <Project />
        <Stack />
    </div>
    )
};

export default Projects;