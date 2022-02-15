import React from 'react';
import ErrorGif from '../../Img/404Error.gif'
import '../../../App.css'
import { NavLink } from 'react-router-dom';
import UIButtons from '../UIButtons/UIButtons';

export const NotFound = () => {
  return (
        <div className='containerNotFound'>
            <img className='containerError404' src={ErrorGif} alt="ErrorImage404"></img>
            <NavLink to="/"><UIButtons classButtons = "btnNotFound" nameButtons = "Volver a la pagina principal"></UIButtons></NavLink>
        </div>
  )
}

export default NotFound;
