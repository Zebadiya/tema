import React from 'react';
import s from './Footer.module.scss'
import { Link } from 'react-router-dom';
import { routes } from '../../scenes/router';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_container}>
        <span>Copyright</span>
        <span>©</span>
        <span>2019</span>
        <Link to={routes.privacy}>Privacy</Link>
        <span>Policy</span>
      </div>
    </div>
  );

}

export default Footer;
