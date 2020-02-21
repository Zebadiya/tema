import s from '../../../scenes/AddProduct/AddProduct.module.scss';
import React, { useContext } from 'react';
import { FormContext } from '../FormContainer/FormContainer';

function Button({addProducts}) {
  const { formState } = useContext(FormContext);
  return(
    <button className={s.add_product_button} type="button" onClick={() => addProducts(formState)}>
      Submit
    </button>
  )
}

export default Button;
