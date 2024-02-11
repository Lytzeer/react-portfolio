import React from 'react';
import Left from './Main_Components/Left';
import Right from './Main_Components/Right';

const Main = () => {
  return (
    <div className='h-screen flex lg:flex-row md:flex-row items-center lg:justify-evenly sm justify-center sm:flex-col flex-col'>
        <Left />
        <Right />
    </div>
  );
};

export default Main;