import React from 'react';
import { Provider } from 'react-redux';

import store from './store'
import Main from './pages/Main'

import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
