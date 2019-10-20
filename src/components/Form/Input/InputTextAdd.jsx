import s from '../FormInput/FormInput.module.scss';
import React from 'react';
import FormInput from '../FormInput/FormInput';

function InputTextAdd({name, ...props}) {
  const {label, placeholder} = props;
  return (
    <FormInput htmlFor={name}>
      {({handleChange, value, error }) => (
        <label className={s.label}>{label}
          <textarea id={name}
                    className={s.input}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e.target.value)}
                    {...props}>
          </textarea>
        </label>)}
    </FormInput>
  )
}

export default InputTextAdd;
