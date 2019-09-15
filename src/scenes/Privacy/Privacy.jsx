import React from 'react';
import s from './Privacy.module.scss';
import { Header, Footer } from '../../components/index';

function Privacy() {
  return(
    <div className={s.privacy}>
      <Header isLightDesign={true} />
      Privacy
      <Footer />
    </div>
  )
}

export default Privacy;
