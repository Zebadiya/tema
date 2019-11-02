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
          <ProductItem item={item}/>
        )
      })}
    </div>
  )
}

export default LatestList;

