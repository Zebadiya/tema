import React from 'react';
import s from './Register.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../router';
import { Input } from '../../components';

function Register({fields, handleFieldChange, isLoading, handleLogin}) {
  return(
    <div className={s.register_container}>
      <div className={s.register}>
        <div className={s.register_title}>register</div>
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

        <button className={s.register_button} type="button" onClick={handleLogin}>
          {isLoading ? 'Loading' : 'Register'}
        </button>
      </div>
      <div className={s.no_register}>
        <span className={s.no_register_text}>I already have an account,
          <Link to={routes.login}> log in</Link>
        </span>
      </div>

    </div>
  )
}

export default Register;
