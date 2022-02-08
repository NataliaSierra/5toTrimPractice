import React from 'react';
import UIButtons from '../../../components2/UI/UIButtons/UIButtons';

export const LayoutFooter = () => {
  return (
      <div>
          <UIButtons classButtons = "btnAdd" nameButtons= "+"></UIButtons>
          <UIButtons classButtons = "btnReset" nameButtons= "Reset"></UIButtons>
          <UIButtons classButtons = "btnSubstract" nameButtons= "-"></UIButtons>
      </div>
  )
};
