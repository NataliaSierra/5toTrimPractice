import React from 'react';
import UIButtons from '../UIButtons/UIButtons';
import '../../../App.css'
import { NavLink } from 'react-router-dom';


export const UIFooter = () => {
  return(
      <>
      <div className='containerFooterButtons'>
        <UIButtons classButtons = "btnFooter" nameButtons = "GitHub"></UIButtons>
        <UIButtons classButtons = "btnFooter" nameButtons = "Twitter"></UIButtons>
        <NavLink to="/Home"><UIButtons classButtons = "btnFooter" nameButtons = "Trabajo 2 en React"></UIButtons></NavLink>
      </div>
      <hr />
      </>
  )
};
