import React from 'react';
import { LayoutHeader } from '../../../components2/Layouts/LayoutHeader2/LayoutHeader2.jsx';
import { LayoutMain } from '../../../components2/Layouts/LayoutMain2/LayoutMain2.jsx';
import { LayoutFooter } from '../../../components2/Layouts/LayoutFooter2/LayoutFooter2.jsx';

export const PageHome = () => {
  return (
      <>
       <LayoutHeader />
      <LayoutMain />
      <LayoutFooter />
      </>
  )
};
