import React from 'react';
import s from './Product.module.scss';
import { routes } from '../routes';

function Product({product, owner, isLoading}) {
  const shouldShowLoading = isLoading || !owner;

  if (!product) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.product}>
      <div className={s.product_container}>
        <div className={s.img_container}>
          <img src={product.photos[0]} alt={product.title}/>
          <div className={s.price_block}>
            <span className={s.price_value}>${product.price}</span>
          </div>
        </div>
        <div className={s.product_info_container}>
          <div className={s.product_info}>
            <h3 className={s.product_title}>{product.title}</h3>
            <p className={s.product_location}>
              <span className={s.location_icon}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              {product.location}
            </p>
          </div>
          <p className={s.location_description}>{product.description}</p>
        </div>
      </div>
      <div className={s.owner_container}>
        <div className={s.owner_block}>
          {shouldShowLoading
            ? <div className={s.loading}>Loading...</div>
            : (<>
              <div className={s.avatar_block}>
                <div className={s.avatar}>
                  <img src={owner.avatar} alt="" />
                </div>
                <div className={s.avatar_bg}></div>
              </div>
              <p className={s.owner_name}>{owner.fullName}</p>
              <p className={s.owner_location}>{owner.location}</p>
            </>)
          }
        </div>
        <a href={routes.home} className={s.blue_btn}>Chat with seller</a>
        <a href={routes.home} className={s.white_btn}>Add to favorive</a>
      </div>
    </div>
  )
}

export default Product;

