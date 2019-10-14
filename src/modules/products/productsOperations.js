import * as actions from './productsActions';
import Api from '../../api';

export function productsOperations() {
  return async function fetchLatestThunk(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest();

      dispatch(actions.fetchLatest.success(res.data));
    } catch (err) {
      dispatch(actions.fetchLatest.error({ message: err.message}),);
    }
  };
}
