import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Router from './scenes/router';
import store from './store/createStore';
import { appOperations } from './modules/app';
import { Spiner } from './components/index';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <Spiner />
    }
    return (
      <div className="root">
        <Router />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.app.isLoading,
  }
}

const AppConnected = connect(mapStateToProps)(App);

function AppProvider() {
  return <Provider store={store}><AppConnected /></Provider>
}

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root'));
