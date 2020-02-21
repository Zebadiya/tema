import React from 'react';
import s from './Input.module.scss';

function Input({label, onChange, name, fields, ...props}) {
  return (
    <div className={s.container}>
      <label className={s.label} htmlFor={name}>{label}</label>
      <input id={name} className={s.input} value={fields[name]} onChange={(e) => onChange(name, e.target.value)} {...props} >
      </input>
    </div>
  )
}

export default Input;
