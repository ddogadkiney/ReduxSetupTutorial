import React, { Component } from 'react';

import Main from './components/Main'
import './App.css';
import RootReducer from './reducers/RootReducer'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);




class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Main/>
    </Provider>
    );
  }
}

export default App;
