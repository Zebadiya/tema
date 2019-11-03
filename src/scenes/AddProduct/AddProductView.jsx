import React, { useContext } from 'react';
import s from './AddProduct.module.scss';
import { FormContainer, InputAdd, InputTextAdd, InputImgAdd } from '../../components/Form';
import { Footer, Header } from '../../components';
import { FormContext } from '../../components/Form/FormContainer/FormContainer';

function AddProduct({addProducts, isLoading}) {
  const initialValue = {
    title: '',
    location: '',
    description: '',
    photos: [],
    price: '',
  };

  function required(value) {
    if (value.trim().length === 0) {
      return 'Is required'
    } else {
      return undefined;
    }
  }

  // const { formState } = useContext(FormContext);

  return (<div className={s.add_product}>
      <Header />
      <div className={s.add_product_container}>
        <div className={s.add_product_form}>
          <h3>Add product</h3>
          <FormContainer initialValue={initialValue}>
            <InputAdd
              name="title"
              label="TITlE"
              placeholder="Kitties"
            />
            <InputAdd
              name="location"
              validate={required}
              label="LOCATION"
              placeholder="For example: Lviv"
            />
            <InputTextAdd
              name="description"
              validate={required}
              label="DESCRIPTION"
              placeholder="For example: 50 shades of gray"
            />
            <InputImgAdd
              name="photos"
              label="PHOTOS"
            />
            <InputAdd
              name="price"
              label="PRICE"
              placeholder="Kitties"
            />
          </FormContainer>
          <button className={s.add_product_button} type="button" onClick={(e) => addProducts(e)}>
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddProduct;

