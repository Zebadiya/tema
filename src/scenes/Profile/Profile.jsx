import React from 'react';
import s from './Profile.module.scss';
import { Header, Footer } from '../../components/index';

function Profile() {
  return(
    <div className={s.profile}>
      <Header />
      Profile
      <Footer />
    </div>
  )
}

export default Profile;
