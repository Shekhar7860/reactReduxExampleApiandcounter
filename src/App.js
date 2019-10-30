import React from 'react';
import logo from './logo.svg';
import './App.css';
import Com from './Com'
import Fetch from './Fetch'
import Counter from './Counter'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import usersReducer from './Reducer';
import thunk from 'redux-thunk';
const store = createStore(usersReducer, applyMiddleware(thunk));

function App() {
 
  return (
    <Provider store={store}>
    <Counter count = 'shhhh'/>
    </Provider>
  );
}

export default App;
