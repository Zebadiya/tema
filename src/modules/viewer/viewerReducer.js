import { handleActions, combineActions } from '@letapp/redux-actions';
import * as authActions from '../auth/authActions';
import * as actions from './viewerActions';

const INITIAL_STATE = {
  fetchViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  setViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions({
  [actions.fetchViewer.start]: (state) => ({
    ...state,
    fetchViewer: {
      ...state.fetchViewer,
      isLoading: true,
      error: null,
      isError: false,
    },
  }),
  [combineActions(
    actions.fetchViewer.success,
    authActions.login.success,
    authActions.register.success,
    )]: (state, action) => ({
    ...state,
    fetchViewer: {
      ...state.fetchViewer,
      isLoading: false,
    },
    user: action.payload,
  }),
  [actions.fetchViewer.error]: (state, action) => ({
    ...state,
    fetchViewer: {
      ...state.fetchViewer,
      isLoading: true,
      error: action.payload,
      isError: true,
    }
  }),

  [actions.setViewer.start]: (state) => ({
    ...state,
    setViewer: {
      ...state.fetchViewer,
      isLoading: true,
      error: null,
      isError: false,
    },
  }),
  [actions.setViewer.success]: (state, action) => ({
    ...state,
    setViewer: {
      ...state.setViewer,
      isLoading: false,
    },
    user: action.payload,
  }),
  [actions.setViewer.error]: (state, action) => ({
    ...state,
    setViewer: {
      ...state.setViewer,
      error: action.payload,
      isLoading: true,
      isError: true,
    }
  }),
}, INITIAL_STATE);
