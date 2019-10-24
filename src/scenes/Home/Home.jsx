import * as React from 'react';
import s from "./Home.module.scss";
import { Header, Footer } from '../../components/index';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import LatestList from '../LatestList/LatestListContainer';
import Product from '../Product/ProductContainer';


function Home(){
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        <Route path={routes.home} component={LatestList} exact />
        <Route path={routes.product} component={Product} exact />
      </Switch>
      <Footer />
    </div>
  )
}

export default Home;
