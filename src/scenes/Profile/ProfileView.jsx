import React from 'react';
import s from './Profile.module.scss';
import { Header, Footer } from '../../components/index';
import { FormContainer, InputAdd, Button } from '../../components/Form';

function ProfileView ({viewer: {fullName, avatar, phone}}) {

    const initialValue = {
        fullName: fullName,
        phone: phone,
        avatar: avatar,
    }
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
                    <FormContainer initialValue={initialValue}>
                        <InputAdd
                            name="fullName"
                            placeholder={fullName}
                            label="Full Name"
                        />
                        <InputAdd
                            name="location"
                            placeholder={phone}
                            label="Phone number"
                        />
                    </FormContainer>
                </div>
            </div>
            <Footer />
        </div>
      )
}

export default ProfileView;