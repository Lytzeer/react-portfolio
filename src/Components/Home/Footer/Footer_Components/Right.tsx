import React from "react";
import LinkedIn from "../../../../assets/img/linkedin.png";

const Right = () => {
    return(
        <div className='flex flex-row items-center pr-4 w-16'>
            <a href="https://www.linkedin.com/in/lukas-portier/">
                <img src={LinkedIn} alt="linkedin"/>
            </a>
        </div>
    )
};

export default Right;