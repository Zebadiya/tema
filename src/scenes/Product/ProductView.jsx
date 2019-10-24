import React from 'react';
import s from './Product.module.scss';

function Product({props}) {
  console.log("view", props.product);
  return (
    <div className={s.product}>
      {props.product.title}
    </div>
  )
}

export default Product;

