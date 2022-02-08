import React, {useState,useEffect} from 'react';
import UIFooter from '../../UI/UIFooter/UIFooter';
import '../../../App.css';
import { useEffect, useState } from 'react';

export const LayoutFooter = () => {
  return(
      <div className='containerBtnFooter'>
          <UIFooter classButtons="more" nameButtons="+"></UIFooter>
          <UIFooter classButtons="reset" nameButtons="Reset"></UIFooter>
          <UIFooter classButtons="minus" nameButtons="-"></UIFooter>
      </div>
  )
};
