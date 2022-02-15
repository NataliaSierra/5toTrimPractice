import React from 'react';
import UIButtons from '../UIButtons/UIButtons';
import { NavLink } from 'react-router-dom';
import '../../GeneralStyle.css'

export const UIHeader = () => {
  return(
      <div className='UIHeader'>
          <h1 className='counterName'>CounterApp</h1>
          <NavLink to="/"><UIButtons classButtons = "Back" nameButtons = "Volver al menu"></UIButtons></NavLink>
      </div>    
  )
};

export default UIHeader;