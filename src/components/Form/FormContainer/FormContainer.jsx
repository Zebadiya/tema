import React, { Component } from 'react';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      errors: {},
    }
  }

  onChange(name, value, isImages = false) {
    if (isImages) {
      value = [URL.createObjectURL(value)];
    }
    this.setState({ values: {
        ...this.state.values,
        [name]: value,
      }
    });
  }

  setError(name, error) {
    this.setState({ errors: {
        ...this.state.errors,
        [name]: error,
      }
    });
  };

  getError(name) {
    return this.state.errors[name];
  }

  render() {
    const value = {
      formState: this.state.values,
      onChange: (name, value, isImages) => this.onChange(name, value, isImages),
      setError: (name, error) => this.setError(name, error),
      getError: (name) => this.getError(name),
    };

    return <FormContext.Provider value={value}>
      {this.props.children}
    </FormContext.Provider>;
  }
}

export default FormContainer;
