import s from '../FormInput/FormInput.module.scss';
import React from 'react';
import FormInput from '../FormInput/FormInput';

function InputImgAdd({name, ...props}) {
  const {label, placeholder} = props;
  return (
    <FormInput htmlFor={name}>
      {({handleChange, value, error }) => (
        <label className={s.label}>{label}
          <input type='file'
                 src="URL"
                 id={name}
                 className={s.input}
                 placeholder={placeholder}
                 onChange={(e) => handleChange(name, e.target.files[0], true)}
                 {...props}>
          </input>
        </label>)}
    </FormInput>
  )
}

export default InputImgAdd;
