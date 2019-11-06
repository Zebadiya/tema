import React from 'react';
import s from './ProductItem.module.scss';

function ProductItem({item}) {
  const {title, id, photos, price, saved} = item;
  return (
    <div className={s.product_block}>
      <div className={s.image_block}>
        <img src={photos[0]} alt={title}/>
      </div>
      <div className={s.info_container}>
          <div id={id} className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  )
}

export default ProductItem;
