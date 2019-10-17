import React from 'react';
import LatestList from './LatestListView';
import { connect } from 'react-redux';
import { fetchLatest } from '../../modules/products/productsActions';
import { productsOperations } from '../../modules/products';

const mapStateToProps = (state) => ({
  list: state.list.latest.list,
  isLoading: state.list.latest.isLoading,
});

const mapDispatchToProps = {
  fetchLatest: productsOperations.fetchLatest
};

function LatestViewContainer() {

  return (
    <LatestList />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestViewContainer);
