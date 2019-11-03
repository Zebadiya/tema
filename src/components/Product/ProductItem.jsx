import React from 'react';
import { generatePath, Link, BrowserRouter } from 'react-router-dom';
import s from './ProductItem.module.scss';
import { routes } from '../../scenes/routes';
import { withRouter } from 'react-router';

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
