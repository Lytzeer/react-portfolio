import React from "react";
import Title from "./Stack_Components/Title";
import Skills from "./Stack_Components/Skills";

const Stack = () => {
    return (
        <div className='flex flex-col justify-center text-center'>
            <Title />
            <Skills />
        </div>
    )
};

export default Stack;