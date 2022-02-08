import React from 'react';
import '../../GeneralStyle.css'

export const UIButtons = ({nameButtons, classButtons, FunctionOnClick}) => {
  return ( 
  <div className='Container'>
     <button onClick={FunctionOnClick} className={classButtons}>{nameButtons}</button>
  </div>
  )
};

export default UIButtons;

