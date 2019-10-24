import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { productsOperations } from '../../modules/products';
import Product from './ProductView';


const mapStateToProps = (state, props) => {
  console.log('props', props);
  return {
    product: state.entities.products[props.match.params.id],
  };
};

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

function AddProductContainer(props) {
  console.log('container', props)
  useEffect(() => {
    !props.product.owner && props.fetchProduct();
  }, [props.product]);

  return <Product props={props}/>
}

const AddProduct = withRouter(AddProductContainer);

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
