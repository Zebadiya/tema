import { compose, withHandlers, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import { routes } from '../router';
import { withRouter } from 'react-router-dom';
import { authOperations } from '../../modules/auth';

function mapStateToProps(state) {
  console.log(state);
  return {
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
    login: authOperations.login,
};

const enhancer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    {
      fields: {
        email: '',
        password: '',
      },
    },
    {
      handleFieldChange: (state) => (fieldName, value)  => ({
        ...state,
        fields: {
          ...state.fields,
          [fieldName]: value,
        },
      }),
    },
  ),
  withHandlers({
    handleLogin: (props) => async () => {
      console.log('props', props);
      await props.login(props.fields);
      props.history.push(routes.home)
    }
  })
);

export default enhancer(LoginView);
