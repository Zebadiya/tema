import React from 'react';
import s from './Login.module.scss';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import { routes } from '../routes';

function Login({ fields, handleLogin, isLoading, handleFieldChange }) {
  return(
    <div className={s.login_container}>
      <div className={s.login}>
        <div className={s.login_title}>Login</div>
        <Input
          fields={fields}
          name="email"
          type="email"
          placeholder="example@gmail.com"
          label="EMAIL"
          onChange={handleFieldChange}
        />

        <Input
          fields={fields}
          name="password"
          type="password"
          label="PASSWORD"
          onChange={handleFieldChange}
        />

        <a className={s.remind} href="#">Don’t remember password?</a>

        <button className={s.login_button} type="button" onClick={handleLogin}>
          {isLoading ? 'Loading' : 'Continue'}
        </button>
      </div>
      <div className={s.no_register}>
        <span className={s.no_register_text}>I have no account,
          <Link to={routes.register}> register now</Link>
        </span>
      </div>

    </div>
  )
}

Login.propTypes = {};

export default Login;
