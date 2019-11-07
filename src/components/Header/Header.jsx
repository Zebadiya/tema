import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/routes';
import s from './Header.module.scss';
import * as Api from '../../api/Api';
import logo_light from '../../image/icons/Logofull-light.svg';
import logo from '../../image/icons/Logofull.svg';
import heart from '../../image/icons/heart-outline.svg';
import heart_light from '../../image/icons/heart-outline-light.svg';
import { viewerOperations } from '../../modules/viewer';
import InfoModal from './Logout/InfoModal';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  console.log("viewer", state);
  return {
    viewer: state.viewer.user,
  };
};

const mapDispatchToProps = {
  fetchViewer: viewerOperations.fetchViewer,
};

function Header({isLightDesign = false, viewer, fetchViewer}) {
  const {isLoggedIn} = Api.Auth;
  const handleLogout = () => {
    Api.Auth.logout();
  };

  const openModal = () => {
    const modal = document.getElementsByClassName("logout_modal")[0];
    modal && modal.classList.toggle("open");
    modal.style.display = modal.classList.contains("open") ? "block" : "none";
  };

  const getViewer = async () => await fetchViewer();

  useEffect(() => {
    console.log('viewer!', viewer);
   !viewer && getViewer();
  }, [viewer, getViewer]);

  const initials = viewer && viewer.fullName.match(/[A-Z]/g).join("");

  console.log('viewer!!', viewer);
  return (
    <header className={`${s.header} ${isLightDesign ? s.light : ''}`}>
      <div className={s.header_container}>
        <Link to={routes.home}>
          {isLightDesign
          ? <img className={s.logo} src={logo_light} alt="Apiko"/>
          : <img className={s.logo} src={logo} alt="Apiko"/>}

        </Link>
        <div className={s.header_left_side}>
          <Link to={routes.addProduct} className={s.sell}>Sell</Link>
          <div className={s.log_button}>
            {isLoggedIn
              ? <InfoModal handleLogout={handleLogout} initials={initials} openModal={openModal}/>
              : <Link to={routes.login}>Login</Link>
            }
          </div>
          <Link to={routes.favorite}>
            {isLightDesign
              ? <img className={s.favorite} src={heart_light} alt="Favorite"/>
              : <img className={s.favorite} src={heart} alt="Favorite"/>
            }
          </Link>
        </div>
      </div>
    </header>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
