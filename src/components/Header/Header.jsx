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

function Header({isLightDesign = false}) {
  const {isLoggedIn} = Api.Auth;
  const handleLogout = () => {
    Api.Auth.logout();
  };

  const openModal = () => {
    const modal = document.getElementsByClassName("logout_modal")[0];
    modal && modal.classList.toggle("open");
    modal.style.display = modal.classList.contains("open") ? "block" : "none";
  };

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
              ? <InfoModal handleLogout={handleLogout} openModal={openModal}/>
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

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;
