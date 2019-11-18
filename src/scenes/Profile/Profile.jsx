import React, { useEffect } from 'react';
import s from './Profile.module.scss';
import { Header, Footer } from '../../components/index';
import { viewerOperations } from '../../modules/viewer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    viewer: state.viewer.user,
  }
};

const mapDispatchToProps = {
  fetchViewer: viewerOperations.fetchViewer,
};



function Profile({fetchViewer, viewer}) {
  const getViewer =  async () => await fetchViewer();

  useEffect(() => {
    !viewer && getViewer();
  }, [viewer]);

  const initials = viewer && viewer.fullName.match(/[A-Z]/g).join("");

  if (!viewer) {
    return <div className={s.loading}>loading</div>;
  }

  const {fullName, avatar, phone} = viewer;

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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
