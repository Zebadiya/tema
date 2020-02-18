import React from 'react';
import s from './Profile.module.scss';
import { Header, Footer } from '../../components/index';

function ProfileView ({viewer: {fullName, avatar, phone}}) {
    const initials = fullName && fullName.match(/[A-Z]/g).join("");

    return(
        <div className={s.profile}>
          <Header />
          <div className={s.container}>
            <div className={s.block}>
              <h5>Profile</h5>
              <div className={s.photo_container}>
                <div className={s.photo_box}>
                  {avatar
                    ?  <img src={avatar} alt=""/>
                    :  <span className={s.icon_text}>{initials}</span>
                  }
                </div>
                <div className={s.upgrade}>Upgrade Photo</div>
              </div>
              <p className={s.info}>Full Name</p>
              <input className={s.info_value} type="text" name="fullName" value={fullName}/>
              <p className={s.info}>Phone number</p>
              <input className={s.info_value} type="text" name="number" value={phone ? phone : ''}/>
            </div>
          </div>
          <Footer />
        </div>
      )
}

export default ProfileView;