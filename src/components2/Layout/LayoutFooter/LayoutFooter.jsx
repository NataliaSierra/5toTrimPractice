import React,{useState, useEffect} from 'react';
import UIButtons from '../../../components2/UI/UIButtons/UIButtons';
import ImgCounter from '../../img/img.png'

export const LayoutFooter = () => {

  const useCounter = () => {
    const [Counting, setCounting] = useState(0); 

    const addCount = () => setCounting(Counting + 10);
    const substractCount = () => setCounting(Counting - 10);
    const resetCount = () => setCounting(0)

    return {Counting, addCount, substractCount, resetCount}
  }
  const {Counting, addCount, substractCount, resetCount} = useCounter()

  useEffect(() => {
    const Image = document.getElementById('ImgEffect');

    if (Counting >= 100) {
      Image.style.filter = 'brightness()'
    } 
    else {
      Image.style.filter = 'grayscale()'
    }

  })

  return (
      <div>
        <div className='principalImage'>
        <img id='ImgEffect' src={ImgCounter} className="ImageContent" alt="Img"></img>
      </div>
        <h1>{Counting}</h1>
          <UIButtons FunctionOnClick={addCount} classButtons = "btnAdd" nameButtons= "+"></UIButtons>
          <UIButtons FunctionOnClick={resetCount} classButtons = "btnReset" nameButtons= "Reset"></UIButtons>
          <UIButtons FunctionOnClick={substractCount} classButtons = "btnSubstract" nameButtons= "-"></UIButtons>
      </div>
  );
  };