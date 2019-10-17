import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { routes } from '../../scenes/router';
import s from './Header.module.scss';
import { compose, withHandlers } from 'recompose';
import * as Api from '../../api/Api';
import logo_light from '../../image/icons/Logofull-light.svg';
import logo from '../../image/icons/Logofull.svg';
import heart from '../../image/icons/heart-outline.svg';
import heart_light from '../../image/icons/heart-outline-light.svg';
import Logout from './Logout/Logout';


function Header({isLightDesign = false}) {
  const {isLoggedIn} = Api.Auth;
  const handleLogout = () => {
    Api.Auth.logout();
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
          <Link to={routes.sell} className={s.sell}>Sell</Link>
          <div className={s.log_button}>
            {isLoggedIn
              ? <Logout handleLogout={handleLogout}/>
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



export default Header;
