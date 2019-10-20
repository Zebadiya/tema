import React, { useContext } from 'react';
import s from './FormInput.module.scss';
import { FormContext } from '../FormContainer/FormContainer';

function FormInput({label, name, validate, ...props}) {
  const context = useContext(FormContext);

  return (
    <FormContext>
      {({ formState, onChange, setError, getError}) => {
        function handleChange(name, value) {
          if (validate) {
            setError(name, validate(value));
          }
          onChange(name, value);
        }

        const error = getError(name);

        return (
          <div className={s.container}>
            {/*{error && <div className={s.error}>{error}</div>}*/}
            {props.children({
              ...props,
              error,
              handleChange,
              value: formState[name] })}
          </div>
        )
      }}
    </FormContext>
  )
}



export default FormInput;
