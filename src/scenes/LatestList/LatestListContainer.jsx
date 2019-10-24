import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import LatestList from './LatestListView';

const mapStateToProps = (state) => {
  return {
    list: state.products.latest.items.map(
      (i) => state.entities.products[i],
    ),
    isLoading: state.products.latest.isLoading,
  };
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.products
};

function LatestListContainer(props) {
  useEffect(() => {
    if (props.list.length === 0) {
      props.fetchLatest().then((res) => {
        console.log('res', res);
      });
    }
  });

  return (
    <LatestList list={props.list} isLoading={props.isLoading} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestListContainer);
