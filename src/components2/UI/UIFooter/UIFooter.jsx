import React from 'react';

export const UIFooter = ({nameButtons, classButtons}) => {
  return (
      <div className='footer'>
          <div className='containerButton'>
              <button className={classButtons}> {nameButtons} </button>
          </div>
      </div>
  );
};
export default UIFooter

