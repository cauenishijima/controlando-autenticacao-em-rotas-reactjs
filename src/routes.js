import React from 'react';

import {
  BrowserRouter, Navigate, Route, Routes as Switch,
} from 'react-router-dom';

import isAuthenticated from './auth';


const RequireAuth = ({ children }) => {
  return isAuthenticated() ? children : <Navigate replace to="/" />
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact element={<h1> Hello World</h1>} />
      <Route path="/app" element={<RequireAuth> <h1>Authenticate </h1></RequireAuth >} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
