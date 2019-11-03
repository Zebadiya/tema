import React from 'react';
import s from './LatestList.module.scss';
import { generatePath, Link } from 'react-router-dom';
import { ProductItem } from '../../components/index';
import { routes } from '../routes';

function LatestList({list, isLoading}) {
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.latest_list}>

      {list.map((item) => {
        return (
          <Link to={generatePath(routes.product, { id: item.id})}>
            <ProductItem key={item.id} item={item}/>
          </Link>
        )
      })}
    </div>
  )
}

export default LatestList;

