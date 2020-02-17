import React, { Component } from 'react';

export const FormContext = React.createContext(null);

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.initialValue,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.setError = this.setError.bind(this);
    this.getError = this.getError.bind(this);
  }

  onChange(name, value, isImages = false) {
    if (isImages) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = reader.result;
        this.setState({ values: {
          ...this.state.values,
          photos: [...this.state.values.photos, img.src],
        }});
      };
      reader.readAsDataURL(value)
    } else {
      if (name === "price") {
        Number.parseInt(value, 10);
      }
      this.setState({ values: {
        ...this.state.values,
        [name]: value,
      }});
    }
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
