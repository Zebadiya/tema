import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { productsOperations, productsSelectors } from '../../modules/products';
import Product from './ProductView';


const mapStateToProps = (state, props) => {
  return {
    product: productsSelectors.getProduct(state, props.match.params.id),
    owner: productsSelectors.getProductOwner(state, props.match.params.id),
    isLoading: state.products.product.isLoading,
  };
};

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

function AddProductContainer(props) {
  const {product, owner, isLoading} = props;
  useEffect(() => {
    !product.owner && props.fetchProduct(product.id);
  }, []);

  return <Product product={product} owner={owner} isLoading={isLoading}/>
}

const AddProductConnect = connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);

export default withRouter(AddProductConnect);

// export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
