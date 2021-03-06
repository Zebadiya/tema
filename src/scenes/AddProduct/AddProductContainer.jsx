import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations } from '../../modules/products';
import AddProduct from './AddProductView';

const mapStateToProps = (state) => {
  return {
    isLoading: state.products.addProduct.isLoading,
    error: state.products.addProduct.error,
  };
};

const mapDispatchToProps = {
  addProducts: productsOperations.addProducts,
};

function AddProductContainer(props) {

  const addNewProducts = async (body) => {
    await props.addProducts(body).then((res) => {
      console.log("add Product action", res)
    });
  };

  return (
    <AddProduct addProducts={addNewProducts} isLoading={props.isLoading} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
