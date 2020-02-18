import { createAsyncActions } from '@letapp/redux-actions';

export const fetchViewer = createAsyncActions(
  'viewer/FETCH_VIEWER',
);

export const setViewer = createAsyncActions(
  'viewer/SET_VIEWER',
);
