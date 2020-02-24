import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import Product from './ProductView';
import { Footer, Header } from '../../components';


const mapStateToProps = (state, props) => {
  console.log('state', state);
  return {
    product: productsSelectors.getProduct(state, props.match.params.id),
    owner: productsSelectors.getProductOwner(state, props.match.params.id),
    isLoading: state.products.product.isLoading,
    user: state.viewer.user,
  };
};

const mapDispatchToProps = {
  fetchProduct: productsOperations.fetchProduct,
};

function AddProductContainer(props) {
  const {product, owner, isLoading, user} = props;
  useEffect(() => {
    if (!owner || !product) {
      props.fetchProduct(props.match.params.id);
    }
  }, [owner, product, isLoading, props]);

  return (
    <>
      <Header />
        <Product product={product} owner={owner} isLoading={isLoading} user={user}/>
      <Footer />
    </>
  )
}

const ProductConnect = connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);

export default ProductConnect;
