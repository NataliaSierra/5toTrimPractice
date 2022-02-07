import React from 'react';
import { LayoutFooter } from '../../Layouts/LayoutFooter/LayoutFooter';
import { LayoutHeader } from '../../Layouts/LayoutHeader/LayoutHeader';
import { LayoutMain } from '../../Layouts/LayoutMain/LayoutMain';


export const HomePage = () => {
  return (
      <>
      <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
      </>
  )
};
