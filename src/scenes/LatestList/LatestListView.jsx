import React from 'react';
import s from './LatestList.module.scss';

function LatestList({list, isLoading}) {
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.latest_list}>Latest list
      {list.map((item) => {
        return <div id={item.id}>{item.title}</div>
      })}
    </div>
  )
}

export default LatestList;

