import React from 'react';
import s from "./Inbox.module.scss";
import { Redirect } from 'react-router-dom';
import { routes } from '../router';
import Api from '../../api';

function Inbox() {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login} />;
  }
  return <div>Inbox</div>
}

export default Inbox;
