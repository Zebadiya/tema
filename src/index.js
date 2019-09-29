import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Router from './scenes/router';
import Api from './api'
import store from './store/createStore';
import { appOperations } from './modules/app';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>
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

ReactDOM.render(<Provider store={store}><AppConnected /></Provider>, document.getElementById('root'));
