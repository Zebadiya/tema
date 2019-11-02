import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import s from './ProductItem.module.scss';
import { routes } from '../../scenes/routes';

function ProductItem({item}) {
  const {title, id, photos, price, saved} = item;
  return (
    <Link className={s.product_block} to={generatePath(routes.product, { id: id})}>
      <div className={s.image_block}>
        <img src={photos[0]} alt={title}/>
      </div>
      <div className={s.info_container}>
        <div id={id} className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
      </div>
    </Link>
  )
}

export default ProductItem;
