import React from 'react';
import UIButtons from '../UIButtons/UIButtons';
import '../../../App.css'


export const UIFooter = () => {
  return(
      <>
      <div className='containerFooterButtons'>
        <UIButtons classButtons = "btnFooter" nameButtons = "GitHub"></UIButtons>
        <UIButtons classButtons = "btnFooter" nameButtons = "Twitter"></UIButtons>
        <UIButtons classButtons = "btnFooter" nameButtons = "LinkedIn"></UIButtons>
      </div>
      <hr />
      </>
  )
};
