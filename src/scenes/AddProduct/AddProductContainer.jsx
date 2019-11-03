import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import AddProduct from './AddProductView';

const mapStateToProps = (state) => {
  return {
    isLoading: state.products.addProduct.isLoading,
  };
};

const mapDispatchToProps = {
  addProducts: productsOperations.addProducts,
};

function AddProductContainer(props) {

  const addNewProducts = async (body) => {
    await props.addProducts(body);
  };

  return (
    <AddProduct addProducts={addNewProducts} isLoading={props.isLoading} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
