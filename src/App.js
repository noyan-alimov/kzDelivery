import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavbarComponent from './components/NavbarComponent';
import RequestToDeliver from './components/RequestToDeliver';

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <RequestToDeliver />
    </Provider>
  );
}

export default App;
