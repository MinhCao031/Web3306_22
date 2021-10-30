import React from 'react';
import SignInForm from './SignInForm/SignInForm';
import RetrievePassword from './RetrievePassword/RetrievePassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignInForm />
        </Route>
        <Route path="/forget">
          <RetrievePassword />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
