import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import AddProduct from './AddProductView';

const mapStateToProps = (state) => {
  return {
    list: state.products.latest.items,
    isLoading: state.products.latest.isLoading,
  };
};

const mapDispatchToProps = {
  fetchLatest: productsOperations.products
};

function AddProductContainer(props) {
  useEffect(() => {
    if (props.list.length === 0) {
      props.fetchLatest().then((res) => {
        console.log('res', res);
      });
    }
  });

  return (
    <AddProduct list={props.list} isLoading={props.isLoading} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
