import React from 'react';
import s from './InfoModal.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../../scenes/routes';

function InfoModal({handleLogout, openModal, initials}) {

  return <div className={s.logout_container}>
    <div className={s.logout_icon} onClick={openModal}>
      <span className={s.logout_icon_text}>{initials}</span>
    </div>
    <div className={`logout_modal ${s.logout_modal}`} onClick={(e) => e.stopPropagation()}>
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

export default InfoModal;
