import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import LatestList from './LatestListView';

const mapStateToProps = (state) => {
  return {
    list: productsSelectors.getLatest(state),
    isLoading: state.products.latest.isLoading,
  };
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.products
};

function LatestListContainer(props) {
  console.log('LatestListContainer')

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
