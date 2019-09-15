import * as React from 'react';
import s from "./Home.module.scss";
import {Header, Footer} from '../../components/index';


function Home(){
  return (
    <div className={s.container}>
      <Header />
      Home
      <Footer />
    </div>
  )
}

export default Home;
