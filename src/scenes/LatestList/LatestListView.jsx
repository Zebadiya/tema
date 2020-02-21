import React from 'react';
import s from './LatestList.module.scss';
import { generatePath, Link } from 'react-router-dom';
import { ProductItem } from '../../components/index';
import { routes } from '../routes';
import ReactDOM from 'react-dom';
import Product from '../Product/ProductView';

function createPortal(e, child) {
  const root = document.getElementById('root');
  console.log('ReactDOM', ReactDOM);
  return ReactDOM.createPortal(
    <div>Hi</div>,
    root,
  );
}

function LatestList({list, isLoading}) {
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.latest_list}>

      {list.map((item) => {
        return (
          <Link key={item.id} to={generatePath(routes.product, { id: item.id})} onClick={createPortal}>
            <ProductItem item={item}/>
          </Link>
        )
      })}
    </div>
  )
}

export default LatestList;

