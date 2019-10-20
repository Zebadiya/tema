import React from 'react';
import s from './Register.module.scss';
import { Link } from 'react-router-dom';
import { Input } from '../../components';
import { routes } from '../routes';

function Register({registerData, changeRegisterData, isLoading, handleRegister}) {
  return(
    <div className={s.register_container}>
      <div className={s.register}>
        <div className={s.register_title}>register</div>
        <Input
          fields={registerData.fields}
          name="email"
          type="email"
          placeholder="example@gmail.com"
          label="EMAIL"
          onChange={changeRegisterData}
        />

        <Input
          fields={registerData.fields}
          name="fullName"
          type="text"
          placeholder="Quentin Tarantino"
          label="FULL NAME"
          onChange={changeRegisterData}
        />

        <Input
          fields={registerData.fields}
          name="password"
          type="password"
          label="PASSWORD"
          onChange={changeRegisterData}
        />

        <Input
          fields={registerData.fields}
          name="repeatPassword"
          type="password"
          label="PASSWORD AGAIN"
          onChange={changeRegisterData}
        />

        <a className={s.remind} href="#">Don’t remember password?</a>

        <button className={s.register_button} type="button" onClick={handleRegister}>
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
