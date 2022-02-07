import React from 'react';
import UIButtons from '../../UI/UIButtons/UIButtons';
import '../../../App.css'

export const LayoutHeader = () => {
  return (
      <>
      <hr  />
      <div className='containerButtonsHeader'>
        <UIButtons classButtons = "btnHeader" nameButtons = "Home"></UIButtons>
        <UIButtons classButtons = "btnHeader" nameButtons = "About Us"></UIButtons>
        <UIButtons classButtons = "btnHeader" nameButtons = "Contact"></UIButtons>
      </div>
      <hr/>
      </>
  )
};
