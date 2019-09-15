import React from 'react';
import s from './Search.module.scss';
import { Header, Footer } from '../../components/index';

function Search() {
  return(
    <div className={s.search}>
      <Header />
      Search
      <Footer />
    </div>
  )
}

export default Search;
