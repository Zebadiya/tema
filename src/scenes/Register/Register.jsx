import React from 'react';
import s from './Register.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../router';

function Register() {
  return(
    <div>
      <Link to={routes.login}>Login</Link>
    </div>
  )
}

export default Register;
