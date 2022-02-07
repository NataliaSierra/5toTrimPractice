import React from 'react';

export const UIButtons = ({nameButtons, classButtons}) => {
  return(
      <>
      <div className='containerHeader'>
          <button className={classButtons}> {nameButtons} </button>
      </div>
      <div className='space'></div>
      </>
  )
}

export default UIButtons;
