import React from 'react';
import s from './Terms.module.scss';
import { Header, Footer } from '../../components/index';

function Terms() {
  return(
    <div className={s.terms}>
      <Header isLightDesign={true}/>
      Terms
      <Footer />
    </div>
  )
}

export default Terms;
