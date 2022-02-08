import React from 'react';
import { LayoutFooter } from '../Layout/LayoutFooter/LayoutFooter';
import { LayoutHeader } from '../Layout/LayoutHeader/LayoutHeader';
import { LayoutMain } from '../Layout/LayoutMain/LayoutMain';



export const Home = () => {
  return (
      <div>
          <LayoutHeader />
          <LayoutMain />
          <LayoutFooter /> 
        </div>
  )
};
