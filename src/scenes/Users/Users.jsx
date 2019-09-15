import React from 'react';
import s from './Users.module.scss';
import { Header, Footer } from '../../components/index';

function Users() {
  return(
    <div className={s.users}>
      <Header />
      Users
      <Footer />
    </div>
  )
}

export default Users;
