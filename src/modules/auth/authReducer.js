import { handleActions } from '@letapp/redux-actions';
import * as actions from './authActions';

const INITIAL_STATE = {
  login: {
    isLoading: false,
    isError: false,
    error: null,
  },
  register: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.login.start]: (state) => ({
      ...state,
      login: {
        ...state.login,
        error: null,
        isLoading: true,
        isError: false,
      }
    }),
    [actions.login.success]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.login.error]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        error: action.payload,
        isLoading: true,
        isError: true,
      }
    }),

    [actions.register.start]: (state) => ({
      ...state,
      register: {
        ...state.register,
        error: null,
        isLoading: true,
        isError: false,
      }
    }),
    [actions.register.success]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.register.error]: (state, action) => ({
      ...state,
      register: {
        ...state.register,
        error: action.payload,
        isLoading: true,
        isError: true,
      }
    }),
}, INITIAL_STATE);
