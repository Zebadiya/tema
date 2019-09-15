import React from 'react';
import s from './Listings.module.scss';
import { Header, Footer } from '../../components/index';

function Listings() {
  return(
    <div className={s.listings}>
      <Header />
      Listings
      <Footer />
    </div>
  )
}

export default Listings;
