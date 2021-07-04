import React from 'react';
import store from './src/store/index'
import { Provider } from 'react-redux'
import Home from './src/screens/Home'

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
