import React from 'react';
import imgMain from '../../Img/logo512.png'
import '../../../App.css'

export const UIMain = () =>{
  return (
      <>
      <div className='containerImage'>
          <img src={imgMain} className='imageMain'></img>
      </div>
      <hr />
      </>
  )
}
