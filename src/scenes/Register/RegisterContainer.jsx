import React, { useCallback, useEffect, useState } from 'react';
import Register from './RegisterView';
import { routes } from '../router';
import * as authOperations from '../../modules/auth/authOperations';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state);
  return {
    isLoading: state.auth.login.isLoading,
  };
}

const mapDispatchToProps = {
  login: authOperations.register,
};

function RegisterContainer() {
  const initialRegData = {
    fields: {
      email: '',
      fullName: '',
      password: '',
      repeatPassword: '',
    }
  };

  const [registerData, setRegisterData] = useState(initialRegData);

  const changeRegisterData = useCallback((name, value) => {
    return setRegisterData((prevState) => Object.assign({}, prevState, {[`fields${name}]`]: value}))
  }, []);

  const handleRegister = async (props) => {
    console.log(registerData.fields);
    await props.login(props.fields);
    props.history.push(routes.home)
  };

  return(
    <Register registerData={registerData}
              changeRegisterData={changeRegisterData}
              handleRegister={handleRegister}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
