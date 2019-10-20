import React from 'react';
import s from './Logout.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../scenes/routes';

function Logout({handleLogout}) {
  return <div className={s.logout_container}>
    <div className={s.logout_icon}>
      <span className={s.logout_icon_text}>TZ</span>
    </div>
    <div className={s.logout_modal}>
      <div className={s.modal_short_info}>
        <div className={s.logout_icon}>
          <span className={s.logout_icon_text}>TZ</span>
        </div>
        <div className={s.modal_short_info_container}>
          <Link to={routes.profile} >Profile</Link>
        </div>
      </div>
      <Link to={routes.profile} className={s.logout_edit_profile}>Edit profile</Link>
      <Link to={routes.home} onClick={handleLogout}>Logout</Link>
    </div>

  </div>
}

export default Logout;
