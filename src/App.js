import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import DeliveryFormPage from './pages/DeliveryFormPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/delivery-form" component={DeliveryFormPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
