import React from 'react';
import s from './Login.module.scss';
import { routes } from '../router';
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import Api from '../../api';

function Login({handleLogin}) {
  return(
    <div className={s.login}>
      <button type="button" onClick={handleLogin}>LOGIN</button>
      <Link to={routes.register}>Register</Link>
    </div>
  )
}

const enhancer = compose(
  withRouter,
  withHandlers({
    handleLogin: props => () => {
      Api.Auth.login();
      props.history.push(routes.home)
    }
  })
)

export default enhancer(Login);
