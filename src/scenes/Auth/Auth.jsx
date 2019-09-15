import * as React from 'react';
import s from "./Auth.module.scss"
import Header from '../../components/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '../router';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Api from '../../api';

function Auth(){
  return (
    <div>
      <Header isLightDesign={true}/>
      <Switch>
        {Api.Auth.isLoggedIn && <Redirect to={routes.home}/>}
        <Route path={routes.login} component={Login}/>
        <Route path={routes.register} component={Register}/>
      </Switch>
    </div>
  )
}

export default Auth;
