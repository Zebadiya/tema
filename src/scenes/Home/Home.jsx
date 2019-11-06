import * as React from 'react';
import s from "./Home.module.scss";
import { Header, Footer } from '../../components/index';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import LatestList from '../LatestList/LatestListContainer';


function Home(){
  return (
    <div className={s.container}>
      <Header />
        <Route path={routes.home} component={LatestList} exact />
      <Footer />
    </div>
  )
}

export default Home;
