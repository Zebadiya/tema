import React from 'react';
import s from "./Inbox.module.scss";
import { Redirect } from 'react-router-dom';

import Api from '../../api';
import { routes } from '../routes';

function Inbox() {
  if (!Api.Auth.isLoggedIn) {
    return <Redirect to={routes.login} />;
  }
  return <div className={s.inbox}>Inbox</div>
}

export default Inbox;
