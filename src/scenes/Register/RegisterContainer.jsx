import React, { useCallback, useState } from 'react';
import Register from './RegisterView';
import * as authOperations from '../../modules/auth/authOperations';
import { connect } from 'react-redux';
import { routes } from '../routes';


function mapStateToProps(state) {
  console.log(state);
  return {
    isLoading: state.auth.register.isLoading,
  };
}

const mapDispatchToProps = {
  register: authOperations.register,
};

function RegisterContainer(props) {
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
      setRegisterData((prevState) =>({...prevState, fields: {...prevState.fields, [name]: value }})
    )
  }, []);

  const handleRegister = async () => {
    await props.register(registerData.fields);
    props.history.push(routes.login)
  };

  return(
    <Register registerData={registerData}
              changeRegisterData={changeRegisterData}
              handleRegister={handleRegister}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
