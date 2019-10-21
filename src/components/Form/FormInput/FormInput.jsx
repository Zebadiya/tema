import React, { useContext } from 'react';
import s from './FormInput.module.scss';
import { FormContext } from '../FormContainer/FormContainer';
import FormContainer from '../FormContainer/FormContainer';

function FormInput({label, name, validate, ...props}) {
  const { formState, onChange, setError, getError } = useContext(FormContext);

  function handleChange(name, value) {
    if (validate) {
      setError(name, validate(value));
    }
    onChange(name, value);
  }
  const error = getError(name);

  return (
    <FormContainer>
      <div className={s.container}>
        {/*{error && <div className={s.error}>{error}</div>}*/}
        {props.children({
          ...props,
          error,
          handleChange,
          value: formState[name] })}
      </div>
    </FormContainer>
  )
}

export default FormInput;
