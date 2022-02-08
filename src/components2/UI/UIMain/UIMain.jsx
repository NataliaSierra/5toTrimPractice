import React from 'react';
import ImgCounter from '../../img/img.png'
import '../../GeneralStyle.css'

export const UIMain = () => {
  return (
      <div className='principalImage'>
        <img src={ImgCounter} className="ImageContent" alt="Img"></img>
      </div>
  );
};
