import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions(
  'products/FETCH_LATEST',
);
export const fetchProduct = createAsyncActions(
  'products/FETCH_PRODUCT',
);
export const addProduct = createAsyncActions(
  'products/ADD_PRODUCT',
);


