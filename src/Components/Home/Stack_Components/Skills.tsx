import React from "react";
import Csharp from '../../../assets/img/csharp.png';
import Python from '../../../assets/img/python.png';
import Reactjs from '../../../assets/img/reactjs.png';
import Golang from '../../../assets/img/go.png';
import Php from '../../../assets/img/php.png';
import Docker from '../../../assets/img/docker.png';
import Linux from '../../../assets/img/linux.png';
import Css from '../../../assets/img/css3.png';
import Figma from '../../../assets/img/figma.png';
import Git from '../../../assets/img/git.png';
import Flask from '../../../assets/img/flask.png';
import Html5 from '../../../assets/img/html5.png';
import Javascript from '../../../assets/img/js.png';
import Java from '../../../assets/img/java.png';
import Tailwind from '../../../assets/img/tailwind.png';
import Typescript from '../../../assets/img/typescript.png';
import Vscode from '../../../assets/img/vs.png';
import Wordpress from '../../../assets/img/wordpress.png';

const Skills = () => {
    return(
        <div className='flex flex-wrap justify-center pt-8 pb-16'>
            <img src={Csharp} alt="C#" className='h-40'/>
            <img src={Python} alt="Python" className='h-40'/>
            <img src={Reactjs} alt="React" className='h-40'/>
            <img src={Golang} alt="Golang" className='h-40'/>
            <img src={Php} alt="PHP" className='h-40'/>
            <img src={Docker} alt="Docker" className='h-40'/>
            <img src={Linux} alt="Linux" className='h-40'/>
            <img src={Css} alt="Css" className='h-40'/>
            <img src={Figma} alt="Figma" className='h-40'/>
            <img src={Git} alt="Git" className='h-40'/>
            <img src={Flask} alt="Flask" className='h-40'/>
            <img src={Html5} alt="HTML" className='h-40'/>
            <img src={Javascript} alt="JS" className='h-40'/>
            <img src={Java} alt="Java" className='h-40'/>
            <img src={Tailwind} alt="Tailwind" className='h-40'/>
            <img src={Typescript} alt="Typesript" className='h-40'/>
            <img src={Vscode} alt="VSC" className='h-40'/>
            <img src={Wordpress} alt="Wordpress" className='h-40'/>
        </div>
    )
};

export default Skills;