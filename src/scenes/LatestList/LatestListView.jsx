import React from 'react';
import s from './LatestList.module.scss';
import { generatePath, Link } from 'react-router-dom';
import { routes } from '../routes';

function LatestList({list, isLoading}) {
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.latest_list}>Latest list
      {list.map((item) => {
        return (
          <Link to={generatePath(routes.product, { id: item.id})}>
          <div id={item.id}>{item.title}</div>
        </Link>)
      })}
    </div>
  )
}

export default LatestList;

