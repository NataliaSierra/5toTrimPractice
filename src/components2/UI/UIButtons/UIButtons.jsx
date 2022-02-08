import React from 'react';
import '../../GeneralStyle.css'

export const UIButtons = ({nameButtons, classButtons}) => {
  return ( 
  <div className='Container'>
     <button className={classButtons}>{nameButtons}</button>
  </div>
  )
};

export default UIButtons;

