import React from 'react';
import s from './Product.module.scss';

function Product({product, owner, isLoading}) {
  const shouldShowLoading = isLoading || !owner;

  if (!product) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.product}>
      <div>
        <p>Product:</p>
        {product.title}
      </div>
      <div>
       <p>Author:</p>
        {shouldShowLoading ? 'Loading...' : owner.fullName}
      </div>
    </div>
  )
}

export default Product;

