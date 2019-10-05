import React from 'react';
import s from './Input.module.scss';

function Input({label, onChange, name, fields, ...props}) {
  return (
    <div className={s.containe}>
      <label>{label}</label>
      <input value={fields[name]} onChange={(e) => onChange(name, e.target.value)} {...props} >
      </input>
    </div>
  )
}

export default Input;
