import React, { useState } from 'react';
import Register from './RegisterView';


function RegisterContainer() {
  const initialRegData = {
    fields: {
      email: '',
      fullName: '',
      password: '',
      repeatPassword: '',
    }
  };

  const {registerData, setRegisterData} = useState(initialRegData);


  return(
    <Register fields={registerData}/>
  )
}

export default <RegisterContainer />
